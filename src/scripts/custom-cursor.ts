// src/scripts/custom-cursor.ts
export function initCustomCursor() {
  const cursor = document.createElement('div');
  cursor.classList.add('custom-cursor');
  document.body.appendChild(cursor);

  document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;

    // Detectar el color de fondo del elemento debajo del cursor
    const elementAtCursor = document.elementFromPoint(e.clientX, e.clientY);
    if (elementAtCursor) {
      const bgColor = window.getComputedStyle(elementAtCursor).backgroundColor;
      
      // Convertir el color de fondo a RGB
      const rgb = bgColor.match(/\d+/g);
      if (rgb) {
        // Calcular la luminosidad
        const luminosity = (parseInt(rgb[0]) * 0.299 + 
                            parseInt(rgb[1]) * 0.587 + 
                            parseInt(rgb[2]) * 0.114) / 255;
        
        // Si el fondo es oscuro, cambia el cursor a blanco
        if (luminosity < 0.5) {
          cursor.classList.add('cursor-on-dark-bg');
        } else {
          cursor.classList.remove('cursor-on-dark-bg');
        }
      }
    }
  });

  // Añade efecto de hover
  document.querySelectorAll('a, button, [data-hover]').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('hover');
    });
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover');
    });
  });
}