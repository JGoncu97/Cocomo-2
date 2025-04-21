import React, { useState } from 'react';
import { CostFactors } from './CostFactors';
import { ResultsDisplay } from './ResultsDisplay';
import '../App.css';

export const CocomoCalculator = () => {
  
  const constants = {
    organic: { a: 2.4, b: 1.05, c: 2.5, d: 0.38 },
    semidetached: { a: 3.0, b: 1.12, c: 2.5, d: 0.35 },
    embedded: { a: 3.6, b: 1.2, c: 2.5, d: 0.32 }
  };

  const costFactors = {
    RELY: { name: "Fiabilidad requerida del software", values: [0.75, 0.88, 1.0, 1.15, 1.4, null] },
    DATA: { name: "Tamaño de la base de datos", values: [0.94, 1.0, 1.08, 1.16, null, null] },
    CPLX: { name: "Complejidad del producto", values: [0.7, 0.85, 1.0, 1.15, 1.3, 1.65] },
    TIME: { name: "Restricciones del tiempo de ejecución", values: [1.0, 1.11, 1.3, 1.66, null, null] },
    STOR: { name: "Restricciones del almacenamiento", values: [1.0, 1.06, 1.21, 1.56, null, null] },
    VIRT: { name: "Inestabilidad de la máquina virtual", values: [0.87, 1.0, 1.15, 1.3, null, null] },
    TURN: { name: "Tiempo de respuesta del computador", values: [0.87, 1.0, 1.07, 1.15, null, null] },
    ACAP: { name: "Capacidad del analista", values: [1.46, 1.19, 1.0, 0.86, 0.71, null] },
    AEXP: { name: "Experiencia en la aplicación", values: [1.29, 1.13, 1.0, 0.91, 0.82, null] },
    PCAP: { name: "Capacidad de los programadores", values: [1.42, 1.17, 1.0, 0.86, 0.7, null] },
    VEXP: { name: "Experiencia en S.O. utilizado", values: [1.21, 1.1, 1.0, 0.9, null, null] },
    LEXP: { name: "Experiencia en el lenguaje de programación", values: [1.14, 1.07, 1.0, 0.95, null, null] },
    MODP: { name: "Uso de prácticas de programación modernas", values: [1.24, 1.1, 1.0, 0.91, 0.82, null] },
    TOOL: { name: "Uso de herramientas software", values: [1.24, 1.1, 1.0, 0.91, 0.83, null] },
    SCED: { name: "Restricciones en la duración del proyecto", values: [1.23, 1.08, 1.0, 1.04, 1.1, null] }
  };

  const [kloc, setKloc] = useState(10);
  const [mode, setMode] = useState('organic');
  const [selectedFactors, setSelectedFactors] = useState({
    RELY: 2, 
    DATA: 2,
    CPLX: 2,
    TIME: 2,
    STOR: 2,
    VIRT: 2,
    TURN: 2,
    ACAP: 2,
    AEXP: 2,
    PCAP: 2,
    VEXP: 2,
    LEXP: 2,
    MODP: 2,
    TOOL: 2,
    SCED: 2
  });
  const [calculationType, setCalculationType] = useState('teamSize');
  const [teamSize, setTeamSize] = useState(4);
  const [desiredDuration, setDesiredDuration] = useState(12);
  const [averageSalary, setAverageSalary] = useState(3000);
  const [results, setResults] = useState(null)


  const handleFactorChange = (factor, value) => {
    setSelectedFactors(prev => ({
      ...prev,
      [factor]: parseInt(value)
    }));
  };

  const calculateEffort = () => {
    // Calcular el multiplicador total M
    let M = 1;
    Object.keys(selectedFactors).forEach(factor => {
      const factorIndex = selectedFactors[factor];
      if (costFactors[factor].values[factorIndex] !== null) {
        M *= costFactors[factor].values[factorIndex];
      }
    });

    // Calcular esfuerzo (E)
    const { a, b } = constants[mode];
    const E = a * Math.pow(kloc, b) * M;

    // Calcular tiempo de desarrollo (Tdev)
    const { c, d } = constants[mode];
    const Tdev = c * Math.pow(E, d);

    // Calcular personal requerido (P)
    const P = E / Tdev;

    // Calcular duración basada en equipo o equipo basado en duración
    let calculatedDuration, calculatedTeamSize;
    if (calculationType === 'teamSize') {
      calculatedDuration = E / teamSize;
      calculatedTeamSize = teamSize;
    } else {
      calculatedDuration = desiredDuration;
      calculatedTeamSize = E / desiredDuration;
    }

   
    let totalCost = 0;
    let remainingMonths = calculatedDuration;
    let currentSalary = averageSalary;
    let year = 1;

    while (remainingMonths > 0) {
      const monthsInYear = Math.min(12, remainingMonths);
      totalCost += calculatedTeamSize * currentSalary * monthsInYear;
      remainingMonths -= monthsInYear;
      year++;
      currentSalary *= 1.05; 
    }

    setResults({
      effort: E,
      duration: Tdev,
      requiredPersonnel: P,
      calculatedDuration,
      calculatedTeamSize,
      totalCost
    });
  };

  return (
    <div className="max-w-7xl mx-auto p-5 flex flex-col gap-8">
      <div className="bg-white rounded-xl shadow-soft p-6">
        <h2 className="text-2xl font-semibold text-secondary mb-4">Parámetros del Proyecto</h2>
        
        <div className="space-y-4">
          <div className="form-group">
            <label className="block font-semibold mb-1">
              Tamaño del proyecto (KLOC):
              <input 
                type="number" 
                value={kloc} 
                onChange={(e) => setKloc(parseFloat(e.target.value))} 
                min="1" 
                step="0.1"
                className="w-full p-2.5 mt-1 text-base rounded-md border border-gray-300"
              />
            </label>
          </div>

          <div className="form-group">
            <label className="block font-semibold mb-1">
              Modo de desarrollo:
              <select 
                value={mode} 
                onChange={(e) => setMode(e.target.value)}
                className="w-full p-2.5 mt-1 text-base rounded-md border border-gray-300"
              >
                <option value="organic">Orgánico</option>
                <option value="semidetached">Semilibre</option>
                <option value="embedded">Rígido</option>
              </select>
            </label>
          </div>

          <div className="form-group">
            <label className="block font-semibold mb-1">
              Tipo de cálculo:
              <select 
                value={calculationType} 
                onChange={(e) => setCalculationType(e.target.value)}
                className="w-full p-2.5 mt-1 text-base rounded-md border border-gray-300"
              >
                <option value="teamSize">Calcular duración basada en equipo</option>
                <option value="duration">Calcular equipo basado en duración</option>
              </select>
            </label>
          </div>

          {calculationType === 'teamSize' ? (
            <div className="form-group">
              <label className="block font-semibold mb-1">
                Tamaño del equipo:
                <input 
                  type="number" 
                  value={teamSize} 
                  onChange={(e) => setTeamSize(parseInt(e.target.value))} 
                  min="1"
                  className="w-full p-2.5 mt-1 text-base rounded-md border border-gray-300"
                />
              </label>
            </div>
          ) : (
            <div className="form-group">
              <label className="block font-semibold mb-1">
                Duración deseada (meses):
                <input 
                  type="number" 
                  value={desiredDuration} 
                  onChange={(e) => setDesiredDuration(parseInt(e.target.value))} 
                  min="1"
                  className="w-full p-2.5 mt-1 text-base rounded-md border border-gray-300"
                />
              </label>
            </div>
          )}

          <div className="form-group">
            <label className="block font-semibold mb-1">
              Salario mensual promedio (USD):
              <input 
                type="number" 
                value={averageSalary} 
                onChange={(e) => setAverageSalary(parseFloat(e.target.value))} 
                min="0"
                step="100"
                className="w-full p-2.5 mt-1 text-base rounded-md border border-gray-300"
              />
            </label>
          </div>
        </div>
      </div>

      <CostFactors 
        costFactors={costFactors} 
        selectedFactors={selectedFactors} 
        onFactorChange={handleFactorChange} 
      />

      <button 
        className="bg-blue-900 font-semibold hover:bg-blue-800 text-white text-lg py-3 px-5 rounded-lg transition-colors duration-300 self-center"
        onClick={calculateEffort}
      >
        Calcular Estimación
      </button>

      {results && <ResultsDisplay results={results} />}
    </div>
  );
};

