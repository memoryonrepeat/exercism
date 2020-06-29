const decorateYear = (n: number) => ({isDivisibleBy: (d: number): boolean => (n % d === 0)})

function isLeapYear(n: number): boolean {
	const year = decorateYear(n)
	
	return (year.isDivisibleBy(4) && !year.isDivisibleBy(100)) || (year.isDivisibleBy(400))
}

export default isLeapYear