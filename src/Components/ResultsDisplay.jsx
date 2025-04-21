import React from 'react';

export const ResultsDisplay = ({ results }) => {
  return (
    <div className="bg-white rounded-xl shadow-soft p-6 mt-6">
      <h2 className="text-2xl font-semibold text-secondary mb-6">Resultados de la Estimación</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded-lg h-full">
          <h3 className="text-xl font-semibold text-tertiary mb-2">Esfuerzo estimado:</h3>
          <p className="text-lg">{results.effort.toFixed(2)} persona-meses</p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg h-full">
          <h3 className="text-xl font-semibold text-tertiary mb-2">Duración estimada:</h3>
          <p className="text-lg">{results.calculatedDuration.toFixed(2)} meses</p>
          <p className="text-gray-600">
            ({Math.floor(results.calculatedDuration / 12)} años y {(results.calculatedDuration % 12).toFixed(2)} meses)
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg h-full">
          <h3 className="text-xl font-semibold text-tertiary mb-2">Equipo requerido:</h3>
          <p className="text-lg">{results.calculatedTeamSize.toFixed(2)} personas</p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg h-full">
          <h3 className="text-xl font-semibold text-tertiary mb-2">Costo total estimado:</h3>
          <p className="text-lg">${results.totalCost.toFixed(2)} USD</p>
        </div>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg mt-6">
        <h3 className="text-xl font-semibold text-tertiary mb-3">Descripción de los resultados:</h3>
        <p className="text-gray-700 leading-relaxed">
          Según el modelo COCOMO, este proyecto requeriría aproximadamente {Math.ceil(results.effort)} persona-meses de esfuerzo.
          Con el equipo y duración ingresados, el proyecto tomaría alrededor de {Math.ceil(results.calculatedDuration)} meses.
          El costo total incluye un aumento del 5% anual en los salarios para proyectos que excedan un año de duración.
        </p>
      </div>
    </div>
  );
};
