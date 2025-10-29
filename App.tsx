import React, { useState, useEffect } from 'react';
import { CalculationMode } from './types';

const RupeeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);

const ShoppingBasketIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.658-.463 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
    </svg>
);

interface InputGroupProps {
  label: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  adornment: React.ReactNode;
  error?: string | null;
}

const InputGroup: React.FC<InputGroupProps> = ({ label, id, value, onChange, placeholder, adornment, error }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-400 mb-1">{label}</label>
    <div className="relative rounded-md shadow-sm">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        {adornment}
      </div>
      <input
        type="number"
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        min="0"
        step="any"
        className={`block w-full rounded-md border pl-10 pr-4 py-2 sm:text-sm bg-gray-900/50 text-gray-200 placeholder-gray-500 ${
            error 
            ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
            : 'border-gray-700 focus:border-[hsl(189,92%,58%)] focus:ring-[hsl(189,92%,58%)]'
        }`}
        autoComplete="off"
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
      />
    </div>
    {error && <p id={`${id}-error`} className="mt-1 text-xs text-red-500">{error}</p>}
  </div>
);

interface ReferencePriceInputProps {
  price: string;
  onPriceChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  quantity: string;
  onQuantityChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  unit: 'g' | 'kg' | 'ml' | 'L';
  onUnitChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  errors?: {
      price?: string | null;
      quantity?: string | null;
  }
}

const ReferencePriceInput: React.FC<ReferencePriceInputProps> = ({ price, onPriceChange, quantity, onQuantityChange, unit, onUnitChange, errors = {} }) => (
    <div>
        <label className="block text-sm font-medium text-gray-400 mb-1">Item Price</label>
        <div className="flex items-start space-x-2">
            <div className="relative flex-grow">
                <div className="relative rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <RupeeIcon className="w-5 h-5 text-gray-500" />
                    </div>
                    <input
                        type="number"
                        value={price}
                        onChange={onPriceChange}
                        placeholder="e.g., 25"
                        min="0"
                        step="any"
                        className={`block w-full rounded-md border pl-10 pr-4 py-2 sm:text-sm bg-gray-900/50 text-gray-200 placeholder-gray-500 ${
                            errors.price 
                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                            : 'border-gray-700 focus:border-[hsl(189,92%,58%)] focus:ring-[hsl(189,92%,58%)]'
                        }`}
                        aria-label="Price"
                        autoComplete="off"
                        aria-invalid={!!errors.price}
                        aria-describedby={errors.price ? `ref-price-error` : undefined}
                    />
                </div>
                 {errors.price && <p id="ref-price-error" className="mt-1 text-xs text-red-500">{errors.price}</p>}
            </div>

            <span className="text-gray-400 font-medium pt-2">for</span>

            <div className="relative flex-grow">
                <div className="relative rounded-md shadow-sm">
                    <input
                        type="number"
                        value={quantity}
                        onChange={onQuantityChange}
                        placeholder="e.g., 100"
                        min="0"
                        step="any"
                        className={`block w-full rounded-md border px-4 py-2 sm:text-sm bg-gray-900/50 text-gray-200 placeholder-gray-500 ${
                            errors.quantity 
                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                            : 'border-gray-700 focus:border-[hsl(189,92%,58%)] focus:ring-[hsl(189,92%,58%)]'
                        }`}
                        aria-label="Reference Quantity"
                        autoComplete="off"
                        aria-invalid={!!errors.quantity}
                        aria-describedby={errors.quantity ? `ref-quantity-error` : undefined}
                    />
                </div>
                {errors.quantity && <p id="ref-quantity-error" className="mt-1 text-xs text-red-500">{errors.quantity}</p>}
            </div>
            
            <div>
                <select
                    value={unit}
                    onChange={onUnitChange}
                    className="rounded-md border border-gray-700 bg-gray-900/50 text-gray-200 shadow-sm focus:border-[hsl(189,92%,58%)] focus:ring-[hsl(189,92%,58%)] sm:text-sm h-full py-2"
                    aria-label="Reference unit"
                >
                    <option value="g">g</option>
                    <option value="kg">kg</option>
                    <option value="ml">ml</option>
                    <option value="L">L</option>
                </select>
            </div>
        </div>
    </div>
);


const App: React.FC = () => {
  const [mode, setMode] = useState<CalculationMode>(CalculationMode.ByBudget);
  const [budget, setBudget] = useState<string>('');
  const [refPrice, setRefPrice] = useState<string>('');
  const [refQuantity, setRefQuantity] = useState<string>('');
  const [refUnit, setRefUnit] = useState<'g' | 'kg' | 'ml' | 'L'>('g');
  const [quantity, setQuantity] = useState<string>('');
  const [quantityUnit, setQuantityUnit] = useState<'g' | 'kg' | 'ml' | 'L'>('g');
  const [result, setResult] = useState<{
    cost?: string;
    quantity?: {
      main: string;
      secondary: string;
    };
  } | null>(null);
  const [errors, setErrors] = useState<Record<string, string | null>>({});

  useEffect(() => {
    // Sync quantity unit type with reference price unit type
    const isRefVolume = refUnit === 'L' || refUnit === 'ml';
    const isQuantityVolume = quantityUnit === 'L' || quantityUnit === 'ml';

    if (isRefVolume && !isQuantityVolume) {
        setQuantityUnit('ml');
    } else if (!isRefVolume && isQuantityVolume) {
        setQuantityUnit('g');
    }
  }, [refUnit, quantityUnit]);

  useEffect(() => {
    const newErrors: Record<string, string | null> = {};

    const validateAndCalculate = () => {
        const refPriceNum = parseFloat(refPrice);
        const refQuantityNum = parseFloat(refQuantity);

        if (refPrice && refPriceNum <= 0) newErrors.refPrice = 'Must be greater than 0';
        if (refQuantity && refQuantityNum <= 0) newErrors.refQuantity = 'Must be greater than 0';

        if (mode === CalculationMode.ByBudget) {
            const budgetNum = parseFloat(budget);
            if (budget && budgetNum <= 0) newErrors.budget = 'Must be greater than 0';
        } else { // ByQuantity
            const quantityNum = parseFloat(quantity);
            if (quantity && quantityNum <= 0) newErrors.quantity = 'Must be greater than 0';
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            setResult(null);
            return;
        }

        if (!refPriceNum || !refQuantityNum) {
            setResult(null);
            return;
        }

      // Normalize reference quantity to base units (g or ml)
      let refQuantityInBaseUnit = refQuantityNum;
      if (refUnit === 'kg' || refUnit === 'L') {
        refQuantityInBaseUnit = refQuantityNum * 1000;
      }

      // Calculate price per base unit
      const normalizedPricePerBaseUnit = refPriceNum / refQuantityInBaseUnit;
      if (!isFinite(normalizedPricePerBaseUnit)) {
          setResult(null);
          return;
      }

      const isVolumeCalculation = refUnit === 'L' || refUnit === 'ml';

      if (mode === CalculationMode.ByBudget) {
        const budgetNum = parseFloat(budget);
        if (budgetNum > 0) {
          const quantityInBaseUnit = budgetNum / normalizedPricePerBaseUnit;
          if (isVolumeCalculation) {
            const quantityL = quantityInBaseUnit / 1000;
            setResult({
                quantity: {
                    main: `${quantityL.toFixed(3)} L`,
                    secondary: `(${quantityInBaseUnit.toFixed(0)} ml)`,
                }
            });
          } else {
            const quantityKg = quantityInBaseUnit / 1000;
            setResult({
                quantity: {
                    main: `${quantityKg.toFixed(3)} kg`,
                    secondary: `(${quantityInBaseUnit.toFixed(0)} g)`,
                }
            });
          }
        } else {
          setResult(null);
        }
      } else { // ByQuantity mode
        const quantityNum = parseFloat(quantity);
        if (quantityNum > 0) {
          let quantityInBaseUnit = quantityNum;
          if (quantityUnit === 'kg' || quantityUnit === 'L') {
            quantityInBaseUnit = quantityNum * 1000;
          }

          const totalCost = quantityInBaseUnit * normalizedPricePerBaseUnit;
          setResult({ cost: totalCost.toFixed(2) });
        } else {
          setResult(null);
        }
      }
    };
    validateAndCalculate();
  }, [mode, budget, refPrice, refQuantity, refUnit, quantity, quantityUnit]);

  const handleModeChange = (newMode: CalculationMode) => {
    setMode(newMode);
    setResult(null);
    setErrors({});
  };

  const resetInputs = () => {
      setBudget('');
      setRefPrice('');
      setRefQuantity('');
      setQuantity('');
      setRefUnit('g');
      setQuantityUnit('g');
      setResult(null);
      setErrors({});
  }
  
  const isVolume = refUnit === 'L' || refUnit === 'ml';
  const hasErrors = Object.values(errors).some(error => error !== null);

  return (
    <div className="min-h-screen text-gray-300 flex flex-col items-center justify-center p-4 selection:bg-[hsl(189,92%,58%)] selection:text-black">
      <main className="w-full max-w-md mx-auto">
        <div className="card">
          <div className="card__border"></div>
          <div className="card_title__container">
              <div className="flex items-center justify-center space-x-3 text-2xl font-bold text-white">
                  <ShoppingBasketIcon className="w-8 h-8 text-[hsl(189,92%,58%)]"/>
                  <h1 className="card_title">Sabzi Calculator</h1>
              </div>
            <p className="card_paragraph">Your smart shopping companion for fresh groceries.</p>
          </div>
          <hr className="line" />

          <div className="space-y-6">
            <div>
              <div className="grid grid-cols-2 gap-2 rounded-lg bg-black/20 p-1">
                <button
                  onClick={() => handleModeChange(CalculationMode.ByBudget)}
                  className={`w-full rounded-md py-2 text-sm font-semibold transition-colors duration-200 ${mode === CalculationMode.ByBudget ? 'bg-[hsl(189,92%,58%)] text-black shadow-lg shadow-[hsl(189,92%,58%)]/20' : 'text-gray-300 hover:bg-white/10'}`}
                >
                  Quantity by Budget
                </button>
                <button
                  onClick={() => handleModeChange(CalculationMode.ByQuantity)}
                  className={`w-full rounded-md py-2 text-sm font-semibold transition-colors duration-200 ${mode === CalculationMode.ByQuantity ? 'bg-[hsl(189,92%,58%)] text-black shadow-lg shadow-[hsl(189,92%,58%)]/20' : 'text-gray-300 hover:bg-white/10'}`}
                >
                  Cost by Quantity
                </button>
              </div>
            </div>
            
            {mode === CalculationMode.ByBudget ? (
              <div className="space-y-4">
                <InputGroup
                  label="Your Budget"
                  id="budget"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  placeholder="e.g., 70"
                  adornment={<RupeeIcon className="w-5 h-5 text-gray-500" />}
                  error={errors.budget}
                />
                <ReferencePriceInput
                  price={refPrice}
                  onPriceChange={(e) => setRefPrice(e.target.value)}
                  quantity={refQuantity}
                  onQuantityChange={(e) => setRefQuantity(e.target.value)}
                  unit={refUnit}
                  onUnitChange={(e) => setRefUnit(e.target.value as 'g'|'kg'|'ml'|'L')}
                  errors={{ price: errors.refPrice, quantity: errors.refQuantity }}
                />
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <label htmlFor="quantity" className="block text-sm font-medium text-gray-400 mb-1">Desired Quantity</label>
                  <div className="flex space-x-2">
                      <div className="relative flex-grow">
                          <div className="relative rounded-md shadow-sm">
                              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-9H3" />
                                  </svg>
                              </div>
                              <input
                                  type="number"
                                  id="quantity"
                                  name="quantity"
                                  value={quantity}
                                  onChange={(e) => setQuantity(e.target.value)}
                                  placeholder="e.g., 250"
                                  min="0"
                                  step="any"
                                  className={`block w-full rounded-md border pl-10 pr-4 py-2 sm:text-sm bg-gray-900/50 text-gray-200 placeholder-gray-500 ${
                                      errors.quantity 
                                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                                      : 'border-gray-700 focus:border-[hsl(189,92%,58%)] focus:ring-[hsl(189,92%,58%)]'
                                  }`}
                                  autoComplete="off"
                                  aria-invalid={!!errors.quantity}
                                  aria-describedby={errors.quantity ? `quantity-error` : undefined}
                                  />
                          </div>
                          {errors.quantity && <p id="quantity-error" className="mt-1 text-xs text-red-500">{errors.quantity}</p>}
                      </div>
                    <div className="flex rounded-md shadow-sm self-start">
                      { isVolume ? (
                          <>
                              <button
                                onClick={() => setQuantityUnit('ml')}
                                className={`px-3 py-2 border border-gray-700 text-sm font-medium rounded-l-md transition-colors ${quantityUnit === 'ml' ? 'bg-[hsl(189,92%,58%)] text-black border-[hsl(189,92%,58%)]' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
                              >
                                ml
                              </button>
                              <button
                                onClick={() => setQuantityUnit('L')}
                                className={`px-3 py-2 border border-gray-700 text-sm font-medium rounded-r-md -ml-px transition-colors ${quantityUnit === 'L' ? 'bg-[hsl(189,92%,58%)] text-black border-[hsl(189,92%,58%)]' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
                              >
                                L
                              </button>
                          </>
                      ) : (
                          <>
                              <button
                                onClick={() => setQuantityUnit('g')}
                                className={`px-3 py-2 border border-gray-700 text-sm font-medium rounded-l-md transition-colors ${quantityUnit === 'g' ? 'bg-[hsl(189,92%,58%)] text-black border-[hsl(189,92%,58%)]' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
                              >
                                g
                              </button>
                              <button
                                onClick={() => setQuantityUnit('kg')}
                                className={`px-3 py-2 border border-gray-700 text-sm font-medium rounded-r-md -ml-px transition-colors ${quantityUnit === 'kg' ? 'bg-[hsl(189,92%,58%)] text-black border-[hsl(189,92%,58%)]' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
                              >
                                kg
                              </button>
                          </>
                      )}
                    </div>
                  </div>
                </div>
                <ReferencePriceInput
                  price={refPrice}
                  onPriceChange={(e) => setRefPrice(e.target.value)}
                  quantity={refQuantity}
                  onQuantityChange={(e) => setRefQuantity(e.target.value)}
                  unit={refUnit}
                  onUnitChange={(e) => setRefUnit(e.target.value as 'g'|'kg'|'ml'|'L')}
                  errors={{ price: errors.refPrice, quantity: errors.refQuantity }}
                />
              </div>
            )}
            
            {result && !hasErrors && (
                <div key={JSON.stringify(result)} className="border border-[hsl(189,92%,58%)]/30 bg-black/20 text-white p-4 rounded-lg animate-result" role="alert">
                  <p className="font-medium text-sm text-[hsl(189,92%,58%)]/80">
                      {result.quantity ? 'You can get:' : 'Total cost:'}
                  </p>
                  {result.quantity && (
                      <div>
                          <p className="text-2xl font-bold text-[hsl(189,92%,58%)]">{result.quantity.main}</p>
                          <p className="text-base text-gray-400">{result.quantity.secondary}</p>
                      </div>
                  )}
                  {result.cost && (
                      <div className="flex items-center text-2xl font-bold text-[hsl(189,92%,58%)]">
                          <RupeeIcon className="w-6 h-6 mr-1" />
                          <span>{result.cost}</span>
                      </div>
                  )}
                </div>
            )}

            <div className="pt-2">
              <button
                  onClick={resetInputs}
                  className="button"
              >
                  Reset
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <div className="w-full max-w-md mx-auto mt-8 text-left">
        <div className="card">
            <div className="card__border"></div>
            <div className="card_title__container">
              <h2 className="card_title">How to Use</h2>
            </div>
            <hr className="line" />
            <ul className="card__list">
                <li className="card__list_item">
                    <span className="check"><svg className="check_svg" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" fillRule="evenodd"></path></svg></span>
                    <div>
                        <span className="list_text font-semibold">Calculate by Budget</span>
                        <p className="text-sm text-gray-400 mt-1">Enter how much you want to spend and the item's price (e.g., ₹50 for 250g) to see how much you can afford.</p>
                    </div>
                </li>
                 <li className="card__list_item">
                    <span className="check"><svg className="check_svg" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" fillRule="evenodd"></path></svg></span>
                    <div>
                        <span className="list_text font-semibold">Calculate by Quantity</span>
                        <p className="text-sm text-gray-400 mt-1">Enter the amount you need (e.g., 500g) and the item's price to see your total cost.</p>
                    </div>
                </li>
            </ul>
        </div>
      </div>

      <footer className="text-center text-sm text-gray-500 my-8">
          <p>Made with 💚 for fresh calculations.</p>
      </footer>
    </div>
  );
};

export default App;