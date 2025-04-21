import React from 'react';

export const CostFactors = ({ costFactors, selectedFactors, onFactorChange }) => {
  const factorGroups = {
    "Atributos del producto": ["RELY", "DATA", "CPLX"],
    "Atributos de la computadora": ["TIME", "STOR", "VIRT", "TURN"],
    "Atributos del personal": ["ACAP", "AEXP", "PCAP", "VEXP", "LEXP"],
    "Atributos del proyecto": ["MODP", "TOOL", "SCED"]
  };

  return (
    <div className="bg-white rounded-xl shadow-soft p-6">
      <h2 className="text-2xl font-semibold text-secondary mb-4">Factores de Costo</h2>
      <p className="text-gray-600 mb-6">Seleccione la valoración para cada factor (Muy bajo, Bajo, Nominal, Alto, Muy alto, Extra alto)</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.keys(factorGroups).map(group => (
          <div key={group} className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-tertiary mb-3">{group}</h3>
            <div className="space-y-3">
              {factorGroups[group].map(factor => (
                <div key={factor} className="bg-white p-3 rounded-md">
                  <label className="block font-medium text-gray-700">
                    {costFactors[factor].name} ({factor}):
                    <select 
                      value={selectedFactors[factor]} 
                      onChange={(e) => onFactorChange(factor, e.target.value)}
                      className="w-full mt-2 p-2 text-base rounded-md border border-gray-300 bg-white"
                    >
                      {costFactors[factor].values.map((val, idx) => (
                        val !== null && (
                          <option key={idx} value={idx}>
                            {["Muy bajo", "Bajo", "Nominal", "Alto", "Muy alto", "Extra alto"][idx]} ({val})
                          </option>
                        )
                      ))}
                    </select>
                  </label>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

