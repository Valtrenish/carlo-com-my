import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

const LoanCalculator = () => {
  const [carPrice, setCarPrice] = useState(150000);
  const [downPayment, setDownPayment] = useState(15000);
  const [interestRate] = useState(3.5);
  const [loanPeriod, setLoanPeriod] = useState(9);

  const calculateMonthlyPayment = useCallback(() => {
    const principal = carPrice - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanPeriod * 12;
    
    if (principal <= 0) return 0;
    
    const monthlyPayment =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    
    return isNaN(monthlyPayment) ? 0 : monthlyPayment;
  }, [carPrice, downPayment, interestRate, loanPeriod]);

  const monthlyPayment = calculateMonthlyPayment();

  return (
    <section className="gradient-hero py-16 md:py-24">
      <div className="container-carlo">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left side - Title and car image */}
          <div className="text-secondary-foreground">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              A New Ride On A Budget With Our
            </h1>
            <p className="text-xl md:text-2xl font-medium mb-8">
              Easy Car Loan Calculator
            </p>
            <div className="relative">
              <div className="bg-secondary/20 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary-foreground/20 flex items-center justify-center">
                    <span className="text-lg font-bold">
                      <span className="text-secondary-foreground">Car</span>
                      <span className="text-primary-foreground">lo</span>
                    </span>
                  </div>
                </div>
                <div className="w-full h-48 md:h-64 bg-gradient-to-r from-secondary/30 to-primary/30 rounded-xl flex items-center justify-center">
                  <svg className="w-32 h-32 text-secondary-foreground/50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Calculator */}
          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-xl">
            <h2 className="text-xl font-bold text-card-foreground mb-6">Loan Calculator</h2>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <Label htmlFor="carPrice" className="text-sm text-muted-foreground mb-2 block">
                  Car Price (RM)*
                </Label>
                <Input
                  id="carPrice"
                  type="number"
                  value={carPrice}
                  onChange={(e) => setCarPrice(Number(e.target.value))}
                  className="border-input"
                />
              </div>
              <div>
                <Label htmlFor="downPayment" className="text-sm text-muted-foreground mb-2 block">
                  Down Payment (RM)*
                </Label>
                <Input
                  id="downPayment"
                  type="number"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                  className="border-input"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <Label className="text-sm text-muted-foreground mb-2 block">
                  Interest Rate*
                </Label>
                <Input
                  type="text"
                  value={`${interestRate}%`}
                  disabled
                  className="border-input bg-muted"
                />
              </div>
              <div>
                <Label className="text-sm text-muted-foreground mb-2 block">
                  Loan Period (Years)*
                </Label>
                <div className="flex items-center gap-4">
                  <Slider
                    value={[loanPeriod]}
                    onValueChange={(value) => setLoanPeriod(value[0])}
                    min={1}
                    max={9}
                    step={1}
                    className="flex-1"
                  />
                  <span className="w-8 text-center font-medium text-foreground">{loanPeriod}</span>
                </div>
              </div>
            </div>

            <div className="border-t border-border pt-6 mb-6">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-1">Monthly Payment</p>
                <p className="text-2xl md:text-3xl font-bold text-primary">
                  RM{monthlyPayment.toLocaleString('en-MY', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}/mth
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant="outline"
                className="flex-1 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                onClick={() => {
                  setCarPrice(150000);
                  setDownPayment(15000);
                  setLoanPeriod(9);
                }}
              >
                Calculate Payment
              </Button>
              <Button asChild className="flex-1 bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <Link to="/apply-loan">
                  Apply Loan
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoanCalculator;