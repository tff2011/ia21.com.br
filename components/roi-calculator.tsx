'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'

const DEFAULT_EMPLOYEES = 150
const DEFAULT_COST = 8500
const ADDRESSABLE_FACTOR = 0.06 // parcela do custo atingida por ganhos de IA
const PRODUCTIVITY_GROWTH = 0.4
const COST_REDUCTION = 0.4
const SPEED_BEFORE_DAYS = 10
const SPEED_AFTER_DAYS = 3
const ERROR_BEFORE = 0.08
const ERROR_AFTER = 0.008
const PROGRAM_INVESTMENT = 89000

const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  maximumFractionDigits: 0,
})

const numberFormatter = new Intl.NumberFormat('pt-BR', {
  maximumFractionDigits: 0,
})

function sanitizeInteger(value: string) {
  return value.replace(/[^0-9]/g, '')
}

function sanitizeCurrency(value: string) {
  return value.replace(/[^0-9.,]/g, '')
}

function parseCurrency(value: string) {
  if (!value) return NaN
  const normalized = value.replace(/\./g, '').replace(',', '.')
  const parsed = Number(normalized)
  return Number.isFinite(parsed) ? parsed : NaN
}

export function ROICalculator() {
  const [employeesInput, setEmployeesInput] = useState('')
  const [costInput, setCostInput] = useState('')

  const metrics = useMemo(() => {
    const employeesRaw = Number(sanitizeInteger(employeesInput))
    const employees = employeesRaw > 0 ? employeesRaw : DEFAULT_EMPLOYEES

    const costParsed = parseCurrency(costInput)
    const costPerEmployee = costParsed > 0 ? costParsed : DEFAULT_COST

    const monthlyBaseCost = employees * costPerEmployee * ADDRESSABLE_FACTOR
    const monthlyCostAfter = monthlyBaseCost * (1 - COST_REDUCTION)
    const monthlyCostSavings = monthlyBaseCost - monthlyCostAfter

    const monthlyHoursBefore = employees * 160 * ADDRESSABLE_FACTOR
    const monthlyHoursAfter = monthlyHoursBefore * (1 + PRODUCTIVITY_GROWTH)
    const extraHours = monthlyHoursAfter - monthlyHoursBefore
    const hourlyCost = costPerEmployee / 160
    const productivityValueMonthly = extraHours * hourlyCost

    const monthlyTotalImpact = monthlyCostSavings + productivityValueMonthly
    const annualSavings = monthlyTotalImpact * 12

    const roiProjected = PROGRAM_INVESTMENT > 0 ? Math.round((annualSavings / PROGRAM_INVESTMENT) * 100) : 0

    return {
      employees,
      costPerEmployee,
      monthlyBaseCost,
      monthlyCostAfter,
      monthlyCostSavings,
      monthlyHoursBefore,
      monthlyHoursAfter,
      productivityValueMonthly,
      annualSavings,
      roiProjected,
    }
  }, [employeesInput, costInput])

  const costChangeLabel = `-${currencyFormatter.format(Math.round(metrics.monthlyCostSavings))}/mês`
  const productivityGainPercent = Math.round(PRODUCTIVITY_GROWTH * 100)

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="rounded-xl border border-border/40 bg-background p-6 space-y-4">
        <h3 className="text-xl font-semibold">Sua operação com IA</h3>
        <div className="space-y-3 text-sm text-muted-foreground">
          <label className="block">
            Número de funcionários
            <input
              inputMode="numeric"
              value={employeesInput}
              onChange={(event) => setEmployeesInput(sanitizeInteger(event.target.value))}
              className="mt-1 w-full rounded-md border border-border/50 bg-transparent px-3 py-2"
              placeholder="Ex: 150"
            />
          </label>
          <label className="block">
            Custo médio por funcionário (R$/mês)
            <input
              inputMode="decimal"
              value={costInput}
              onChange={(event) => setCostInput(sanitizeCurrency(event.target.value))}
              className="mt-1 w-full rounded-md border border-border/50 bg-transparent px-3 py-2"
              placeholder="Ex: 8.500"
            />
          </label>
          <p className="text-xs">
            *Use esses campos para estimar o impacto da IA. No diagnóstico, calculamos com seus dados reais e
            contexto operacional.
          </p>
        </div>
        <Link href="/contato" className="inline-flex">
          <Button className="mt-4 w-full justify-center">
            Solicitar cálculo personalizado
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>

      <div className="rounded-xl border border-brand-metallic-gold/40 bg-brand-metallic-gold/5 p-6 space-y-4">
        <div className="flex items-center gap-2">
          <h3 className="text-xl font-semibold text-foreground">Projeção imediata com IA</h3>
          <Sparkles className="h-5 w-5 text-brand-metallic-gold" />
        </div>
        <table className="w-full text-sm">
          <thead className="text-left text-muted-foreground">
            <tr>
              <th className="py-2">Métrica</th>
              <th className="py-2">Antes</th>
              <th className="py-2">Com IA</th>
              <th className="py-2">Impacto</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/40 text-muted-foreground">
            <tr>
              <td className="py-2 font-medium text-foreground">Horas produtivas/mês</td>
              <td>{numberFormatter.format(Math.round(metrics.monthlyHoursBefore))}</td>
              <td>{numberFormatter.format(Math.round(metrics.monthlyHoursAfter))}</td>
              <td className="text-brand-metallic-gold font-semibold">+{productivityGainPercent}%</td>
            </tr>
            <tr>
              <td className="py-2 font-medium text-foreground">Custo operacional</td>
              <td>{currencyFormatter.format(Math.round(metrics.monthlyBaseCost))}</td>
              <td>{currencyFormatter.format(Math.round(metrics.monthlyCostAfter))}</td>
              <td className="text-brand-metallic-gold font-semibold">{costChangeLabel}</td>
            </tr>
            <tr>
              <td className="py-2 font-medium text-foreground">Velocidade de entrega</td>
              <td>{SPEED_BEFORE_DAYS} dias</td>
              <td>{SPEED_AFTER_DAYS} dias</td>
              <td className="text-brand-metallic-gold font-semibold">3x mais rápido</td>
            </tr>
            <tr>
              <td className="py-2 font-medium text-foreground">Taxa de erro</td>
              <td>{(ERROR_BEFORE * 100).toFixed(1).replace('.', ',')}%</td>
              <td>{(ERROR_AFTER * 100).toFixed(1).replace('.', ',')}%</td>
              <td className="text-brand-metallic-gold font-semibold">-90%</td>
            </tr>
          </tbody>
        </table>
        <div className="space-y-1 text-sm text-foreground">
          <p>
            💰 Economia total anual com IA:{' '}
            <span className="font-semibold">{currencyFormatter.format(Math.round(metrics.annualSavings))}</span>
          </p>
          <p>
            📈 ROI projetado:{' '}
            <span className="font-semibold">{metrics.roiProjected.toLocaleString('pt-BR')}%</span>
          </p>
        </div>
      </div>
    </div>
  )
}
