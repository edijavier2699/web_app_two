"use client"

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

// Definir la interfaz para los datos del gráfico
interface ChartData {
  month: string;
  rental_yield: number;
}

// Definición de los conjuntos de datos
const chartDataSets: ChartData[][] = [
  [ // Conjunto de datos 1
    { month: "January", rental_yield: 5.1 },
    { month: "February", rental_yield: 5.3 },
    { month: "March", rental_yield: 6.2 },
    { month: "April", rental_yield: 7.5 },
    { month: "May", rental_yield: 8.1 },
    { month: "June", rental_yield: 8.5 },
  ],
  [ // Conjunto de datos 2
    { month: "January", rental_yield: 4.2 },
    { month: "February", rental_yield: 4.7 },
    { month: "March", rental_yield: 5.5 },
    { month: "April", rental_yield: 6.0 },
    { month: "May", rental_yield: 7.2 },
    { month: "June", rental_yield: 7.8 },
  ],
  [ // Conjunto de datos 3
    { month: "January", rental_yield: 3.0 },
    { month: "February", rental_yield: 3.3 },
    { month: "March", rental_yield: 3.8 },
    { month: "April", rental_yield: 4.2 },
    { month: "May", rental_yield: 4.8 },
    { month: "June", rental_yield: 5.1 },
  ]
];

const chartConfig: ChartConfig = {
  rental_yield: {
    label: "Rental Yield ",
    color: "#C8E869",
  },
};

interface LineChartMarketplaceProps {
  index: number; // El índice para seleccionar el conjunto de datos
}

export const LineChartMarketplace: React.FC<LineChartMarketplaceProps> = ({ index }) => {
  const chartData = chartDataSets[index];

  return (
    <Card className="border-0 shadow-none my-2">
      <CardHeader>
        <CardTitle className="hidden">Chart {index + 1}</CardTitle>
        <CardDescription>
          Showing the property rental yield for the last 6 months
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" hideLabel />}
            />
            <Area
              dataKey="rental_yield"
              type="linear"
              fill="#C8E869"
              fillOpacity={0.4}
              stroke="#A8D13D"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
