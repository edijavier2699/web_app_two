interface FormatCurrencyProps {
    amount: number;
}

export const FormatCurrency: React.FC<FormatCurrencyProps> = ({ amount }) => {
    // Usar Intl.NumberFormat para formatear como moneda
    const formatter = new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP',
        minimumFractionDigits: 0, // No mostrar decimales por defecto
        maximumFractionDigits: 2, // Mostrar hasta 2 decimales si son necesarios
    });

    const formattedAmount = formatter.format(amount);

    return <span className="font-bold">{formattedAmount}</span>;
};
