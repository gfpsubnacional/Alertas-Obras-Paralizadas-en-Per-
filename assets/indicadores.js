/* Corte de setiembre de 2026. Importes del dashboard en millones de soles. */
window.OBRAS_INDICADORES = {
  financial(works, field) {
    const investments = new Map();
    works.forEach(work => investments.set(work.investmentKey, work[field]));
    const values = [...investments.values()].filter(value => Number.isFinite(value));
    return {
      total: values.length ? values.reduce((sum, value) => sum + value, 0) : null,
      missing: investments.size - values.length,
      investments: investments.size
    };
  },
  population(works) {
    const districts = new Map();
    works.forEach(work => {
      if (!Number.isFinite(work.people) || work.people <= 0) return;
      const district = [work.region, work.provincia, work.distrito].join('|');
      districts.set(district, Math.max(districts.get(district) || 0, work.people));
    });
    return districts.size ? [...districts.values()].reduce((sum, value) => sum + value, 0) : null;
  },
  hasCoordinates(work) {
    return Array.isArray(work.latlng) && work.latlng.length === 2
      && work.latlng.every(Number.isFinite)
      && work.latlng[0] >= -19 && work.latlng[0] <= 0.5
      && work.latlng[1] >= -82 && work.latlng[1] <= -68;
  }
};
