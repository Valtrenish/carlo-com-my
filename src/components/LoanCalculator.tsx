import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import heroCar from "@/assets/hero-car.webp";

const LoanCalculator = () => {
  const [carPrice, setCarPrice] = useState(150000);
  const [downPayment, setDownPayment] = useState(15000);
  const [interestRate, setInterestRate] = useState(3.5);
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
          <div className="text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              A New Ride On A Budget With Our Easy Car Loan Calculator
            </h1>
            <div className="relative mt-8">
              <img src={heroCar} alt="Premium car available for loan" className="w-full max-w-lg mx-auto drop-shadow-2xl" />
            </div>
          </div>

          {/* Right side - Calculator */}
          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-card-foreground mb-6">Loan Calculator</h2>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <Label htmlFor="carPrice" className="text-sm font-bold text-foreground mb-2 block">
                  Car Price (RM)*
                </Label>
                <Input
                  id="carPrice"
                  type="number"
                  value={carPrice}
                  onChange={(e) => setCarPrice(Number(e.target.value))}
                  className="border-input bg-muted"
                />
              </div>
              <div>
                <Label htmlFor="downPayment" className="text-sm font-bold text-foreground mb-2 block">
                  Down Payment (RM)*
                </Label>
                <Input
                  id="downPayment"
                  type="number"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                  className="border-input bg-muted"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <Label htmlFor="interestRate" className="text-sm font-bold text-foreground mb-2 block">
                  Interest Rate*
                </Label>
                <Input
                  id="interestRate"
                  type="number"
                  step="0.1"
                  min="0"
                  max="20"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="border-input bg-muted"
                />
              </div>
              <div>
                <Label className="text-sm font-bold text-foreground mb-2 block">
                  Loan Period (Years)*
                </Label>
                <div className="flex items-center gap-3 mt-2">
                  <Slider
                    value={[loanPeriod]}
                    onValueChange={(value) => setLoanPeriod(value[0])}
                    min={1}
                    max={9}
                    step={1}
                    className="flex-1"
                  />
                  <span className="bg-secondary text-secondary-foreground text-sm font-bold px-2 py-1 rounded min-w-[2rem] text-center">{loanPeriod}</span>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-sm font-bold text-foreground mb-1">Montly Payment</p>
              <p className="text-2xl md:text-3xl font-bold text-primary">
                RM{monthlyPayment.toLocaleString('en-MY', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}/mth
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant="outline"
                className="flex-1 border-carlo-blue text-carlo-blue hover:bg-carlo-blue hover:text-white font-bold"
                onClick={() => {}}
              >
                Calculate Payment
              </Button>
              <Button asChild className="flex-1 bg-carlo-blue hover:bg-carlo-blue/90 text-white font-bold">
                <Link to="/apply-loan">
                  Find Cars Within Budget
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