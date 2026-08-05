// ─────────────────────────────────────────────
// datos.js — Escenas y marcadores del tour 360°
// ─────────────────────────────────────────────

const transformDir = {
  derecha: '',
  izquierda: 'transform: scaleX(-1);',
  arriba: 'transform: rotate(-90deg);',
  abajo: 'transform: rotate(90deg);',
};

// circle2.png (la flecha) se usa cuando el marcador tiene una orientación
// explícita (derecha/izquierda/arriba/abajo); circle4.png es el hover
// genérico para cuando no se especifica orientación. No aplica a e01
// (esas escenas siempre pasan icono explícito, ver iconoE01 más abajo).
const iconoDefault = { normal: 'fotos/circle.gif', hover: 'fotos/circle2.png', width: 50, height: 50 };
const iconoSinDireccion = { normal: 'fotos/circle.gif', hover: 'fotos/circle4.png', width: 50, height: 50 };

function claseIcono(icono) {
  return icono.sombra ? 'marcador-icono con-sombra' : 'marcador-icono';
}

function claseMarcador(icono) {
  return icono.ajusteVertical ? 'marcador marcador--ajuste-vertical' : 'marcador';
}

export function marcadorHTML(label, escenaDestino, direccion = null, icono = (direccion ? iconoDefault : iconoSinDireccion)) {
  const estilo = direccion ? (transformDir[direccion] || '') : '';
  return `
    <div class="${claseMarcador(icono)}">
      <div class="${claseIcono(icono)}" data-destino="${escenaDestino}">
        <img class="normal" src="${icono.normal}" width="${icono.width}" height="${icono.height}">
        <img class="hover"  src="${icono.hover}" width="${icono.width}" height="${icono.height}" style="${estilo}">
      </div>
      <div class="marcador-label" data-destino="${escenaDestino}">
        <span>${label}</span>
      </div>
    </div>`;
}

export function marcadorImagenHTML(imagenSrc, escenaDestino, direccion = null, icono = (direccion ? iconoDefault : iconoSinDireccion)) {
  const estilo = direccion ? (transformDir[direccion] || '') : '';
  return `
    <div class="${claseMarcador(icono)}">
      <div class="${claseIcono(icono)}" data-destino="${escenaDestino}">
        <img class="normal" src="${icono.normal}" width="${icono.width}" height="${icono.height}">
        <img class="hover"  src="${icono.hover}" width="${icono.width}" height="${icono.height}" style="${estilo}">
      </div>
      <div class="marcador-label" data-destino="${escenaDestino}">
        <img src="${imagenSrc}">
      </div>
    </div>`;
}

export function gifHTML(escenaDestino, direccion = null, icono = (direccion ? iconoDefault : iconoSinDireccion)) {
  const estilo = direccion ? (transformDir[direccion] || '') : '';
  return `
    <div class="${claseMarcador(icono)}">
      <div class="${claseIcono(icono)}" data-destino="${escenaDestino}">
        <img class="normal" src="${icono.normal}" width="${icono.width}" height="${icono.height}">
        <img class="hover"  src="${icono.hover}" width="${icono.width}" height="${icono.height}" style="${estilo}">
      </div>
    </div>`;
}

export const paneles = [
  {
    id: 'e18',
    logo: 'fotos/twister.webp',
    caracteristicas: [
      '4 Toboganes',
      'Giros en embudo',
      'Descensos en espiral',
      'Carreras acuáticas',
    ],
  },
  {
    id: 'e88',
    logo: 'fotos/aguakids.webp',
    caracteristicas: [
      '3 toboganes',
      'Rodadero',
      'Chorros sorpresa',
      'Caída de agua',
    ],
  },
  {
    id: 'e110',
    logo: 'fotos/racer.webp',
    caracteristicas: [
      '2 toboganes de caída libre',
      '1 tobogán de carreras',
      '8 metros de altura',
    ],
  },
];

// pin.gif mide 50x80px, pero el contenido visible (la punta del pin)
// termina en el pixel 69, es decir 29px por encima del borde inferior de
// la caja: el anchor ('left center') apunta al centro de la caja (y=40),
// no a la punta real del pin. ajusteVertical corrige ese desfase.
const iconoE01 = { normal: 'fotos/pin.gif', hover: 'fotos/pin2.png', width: 50, height: 80, sombra: true, ajusteVertical: 29 };

// marcadores hacia tomas aéreas (fuera de e01): mismo icono normal, hover circle5.png
const iconoAerea = { normal: 'fotos/circle.gif', hover: 'fotos/circle5.png', width: 50, height: 50 };

export const escenas = {
  e01: {
    panorama: 'fotos/Aereas/01.jpg',
    defaultYaw: '309.16deg',
    defaultPitch: '-59.01deg',
    markers: [
      {
        id: 'e01-a-e03',
        position: { yaw: '237.97deg', pitch: '-30.91deg' },
        html: marcadorHTML('Parqueaderos', 'e03', 'derecha', iconoE01),
        size: { width: 320, height: 80 },
        anchor: 'left center',
      },
      {
        id: 'e01-a-e02',
        position: { yaw: '233.51deg', pitch: '-46.62deg' },
        html: marcadorHTML('Entrada vehicular', 'e02', 'derecha', iconoE01),
        size: { width: 320, height: 80 },
        anchor: 'left center',
      },
      {
        id: 'e01-a-e04',
        position: { yaw: '248.51deg', pitch: '-36.65deg' },
        html: marcadorHTML('Monumento', 'e04', 'derecha', iconoE01),
        size: { width: 320, height: 80 },
        anchor: 'left center',
      },
      {
        id: 'e01-a-e05',
        position: { yaw: '260.50deg', pitch: '-32.55deg' },
        html: marcadorHTML('Entrada', 'e05', 'derecha', iconoE01),
        size: { width: 320, height: 80 },
        anchor: 'left center',
      },
      {
        id: 'e01-a-e18',
        position: { yaw: '273.77deg', pitch: '-37.77deg' },
        html: marcadorImagenHTML('fotos/twister.webp', 'e18', 'derecha', iconoE01),
        size: { width: 320, height: 80 },
        anchor: 'left center',
      },
      {
        id: 'e01-a-e20',
        position: { yaw: '272.64deg', pitch: '-31.74deg' },
        html: marcadorImagenHTML('fotos/spa.webp', 'e20', 'derecha', iconoE01),
        size: { width: 320, height: 80 },
        anchor: 'left center',
      },
      {
        id: 'e01-a-e07',
        position: { yaw: '254.22deg', pitch: '-27.21deg' },
        html: marcadorHTML("Henry's Parrilla", 'e07', 'derecha', iconoE01),
        size: { width: 320, height: 80 },
        anchor: 'left center',
      },
      {
        id: 'e01-a-e60',
        position: { yaw: '294.97deg', pitch: '-53.70deg' },
        html: marcadorHTML('Piscinas', 'e60', 'derecha', iconoE01),
        size: { width: 320, height: 80 },
        anchor: 'left center',
      },
      {
        id: 'e01-a-e88',
        position: { yaw: '278.74deg', pitch: '-48.60deg' },
        html: marcadorImagenHTML('fotos/aguakids.webp', 'e88', 'derecha', iconoE01),
        size: { width: 320, height: 80 },
        anchor: 'left center',
      },
      {
        id: 'e01-a-e52',
        position: { yaw: '294.67deg', pitch: '-34.10deg' },
        html: marcadorHTML('Mirador de Topocoro', 'e52', 'derecha', iconoE01),
        size: { width: 320, height: 80 },
        anchor: 'left center',
      },
      {
        id: 'e01-a-e110',
        position: { yaw: '15.28deg', pitch: '-62.79deg' },
        html: marcadorImagenHTML('fotos/racer.webp', 'e110', 'derecha', iconoE01),
        size: { width: 320, height: 80 },
        anchor: 'left center',
      },
      {
        id: 'e01-a-e100',
        position: { yaw: '347.70deg', pitch: '-60.76deg' },
        html: marcadorHTML('Plazoleta de comidas', 'e100', 'derecha', iconoE01),
        size: { width: 320, height: 80 },
        anchor: 'left center',
      },
      {
        id: 'e01-a-e130',
        position: { yaw: '355.21deg', pitch: '-52.25deg' },
        html: marcadorHTML('Canchas Multiples', 'e130', 'derecha', iconoE01),
        size: { width: 320, height: 80 },
        anchor: 'left center',
      },
    ],
  },
  e130: {
    panorama: 'fotos/Aereas/130.jpg',
    defaultYaw: '159.61deg',
    defaultPitch: '-30.30deg',
    markers: [],
  },
  e88: {
    panorama: 'fotos/AquaKids/88.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    markers: [],
  },
  e02: {
    panorama: 'fotos/Entrada/02.jpg',
    defaultYaw: '227.01deg',
    defaultPitch: '-11.16deg',
    markers: [
      {
        id: 'e02-a-e03',
        position: { yaw: '230.99deg', pitch: '-3.85deg' },
        html: gifHTML('e03'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
    ],
  },
  e03: {
    panorama: 'fotos/Aereas/03.jpg',
    defaultYaw: '358.44deg',
    defaultPitch: '-34.91deg',
    markers: [
      {
        id: 'e03-a-e05',
        position: { yaw: '325.88deg', pitch: '-19.01deg' },
        html: gifHTML('e05'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
      {
        id: 'e03-a-e04',
        position: { yaw: '348.74deg', pitch: '-38.52deg' },
        html: gifHTML('e04'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
      {
        id: 'e03-a-e02',
        position: { yaw: '49.11deg', pitch: '-21.04deg' },
        html: gifHTML('e02'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
    ],
  },
  e04: {
    panorama: 'fotos/Entrada/04.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    markers: [
      {
        id: 'e04-a-e03',
        position: { yaw: '231.07deg', pitch: '11.75deg' },
        html: gifHTML('e03'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
      {
        id: 'e04-a-e02',
        position: { yaw: '116.47deg', pitch: '1.10deg' },
        html: gifHTML('e02'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
    ],
  },
  e05: {
    panorama: 'fotos/Entrada/05.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    markers: [
      {
        id: 'e05-a-e06',
        position: { yaw: '355.15deg', pitch: '-3.34deg' },
        html: gifHTML('e06'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
      {
        id: 'e05-a-e04',
        position: { yaw: '131.87deg', pitch: '-4.26deg' },
        html: gifHTML('e04'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
      {
        id: 'e05-a-e03',
        position: { yaw: '181.98deg', pitch: '0.86deg' },
        html: gifHTML('e03'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
      {
        id: 'e05-a-e07',
        position: { yaw: '301.29deg', pitch: '-2.06deg' },
        html: gifHTML('e07'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
      {
        id: 'e05-a-e02',
        position: { yaw: '112.72deg', pitch: '-0.71deg' },
        html: gifHTML('e02'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
      {
        id: 'e05-a-e18',
        position: { yaw: '57.49deg', pitch: '-0.93deg' },
        html: gifHTML('e18'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
    ],
  },
  e06: {
    panorama: 'fotos/Entrada/06.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    markers: [
      {
        id: 'e06-a-e05',
        position: { yaw: '188.21deg', pitch: '-8.49deg' },
        html: gifHTML('e05'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
    ],
  },
  e07: {
    panorama: 'fotos/Yariguies/07.jpg',
    defaultYaw: '264.99deg',
    defaultPitch: '3.29deg',
    markers: [
      {
        id: 'e07-a-e08',
        position: { yaw: '236.39deg', pitch: '-1.32deg' },
        html: gifHTML('e08'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
      {
        id: 'e07-a-e12',
        position: { yaw: '317.18deg', pitch: '-8.60deg' },
        html: gifHTML('e12', 'abajo'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
      {
        id: 'e07-a-e05',
        position: { yaw: '130.49deg', pitch: '-3.14deg' },
        html: gifHTML('e05'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
    ],
  },
  e08: {
    panorama: 'fotos/Yariguies/08.jpg',
    defaultYaw: '217.99deg',
    defaultPitch: '-1.45deg',
    markers: [
      {
        id: 'e08-a-e07',
        position: { yaw: '34.55deg', pitch: '-3.81deg' },
        html: gifHTML('e07'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
      {
        id: 'e08-a-e09',
        position: { yaw: '221.17deg', pitch: '-1.30deg' },
        html: gifHTML('e09'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
    ],
  },
  e09: {
    panorama: 'fotos/Yariguies/09.jpg',
    defaultYaw: '205.14deg',
    defaultPitch: '0.28deg',
    markers: [
      {
        id: 'e09-a-e07',
        position: { yaw: '28.15deg', pitch: '-6.73deg' },
        html: gifHTML('e07'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
      {
        id: 'e09-a-e11',
        position: { yaw: '193.87deg', pitch: '-0.31deg' },
        html: gifHTML('e11'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
    ],
  },
  e11: {
    panorama: 'fotos/Yariguies/11.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    markers: [
      {
        id: 'e11-a-e07',
        position: { yaw: '6.69deg', pitch: '-1.16deg' },
        html: gifHTML('e07'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
    ],
  },
  e12: {
    panorama: 'fotos/Yariguies/12.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    markers: [
      {
        id: 'e12-a-e13',
        position: { yaw: '220.22deg', pitch: '-4.18deg' },
        html: gifHTML('e13'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
    ],
  },
  e13: {
    panorama: 'fotos/Yariguies/13.jpg',
    defaultYaw: '214.64deg',
    defaultPitch: '-3.14deg',
    markers: [
      {
        id: 'e13-a-e14',
        position: { yaw: '215.38deg', pitch: '-4.06deg' },
        html: gifHTML('e14'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
    ],
  },
  e14: {
    panorama: 'fotos/Yariguies/14.jpg',
    defaultYaw: '330.43deg',
    defaultPitch: '-7.24deg',
    markers: [
      {
        id: 'e14-a-e15',
        position: { yaw: '319.39deg', pitch: '-6.79deg' },
        html: gifHTML('e15'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
    ],
  },
  e15: {
    panorama: 'fotos/Yariguies/15.jpg',
    defaultYaw: '175.13deg',
    defaultPitch: '-10.81deg',
    markers: [
      {
        id: 'e15-a-e16',
        position: { yaw: '211.64deg', pitch: '-0.64deg' },
        html: gifHTML('e16'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
      {
        id: 'e15-a-e17',
        position: { yaw: '50.36deg', pitch: '0.49deg' },
        html: gifHTML('e17'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
      {
        id: 'e15-a-e14',
        position: { yaw: '131.29deg', pitch: '-4.87deg' },
        html: gifHTML('e14'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
    ],
  },
  e16: {
    panorama: 'fotos/Yariguies/16.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    markers: [
      {
        id: 'e16-a-e15',
        position: { yaw: '23.16deg', pitch: '-1.41deg' },
        html: gifHTML('e15'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
    ],
  },
  e17: {
    panorama: 'fotos/Yariguies/17.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    markers: [
      {
        id: 'e17-a-e15',
        position: { yaw: '214.74deg', pitch: '-2.82deg' },
        html: gifHTML('e15'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
      {
        id: 'e17-a-e35',
        position: { yaw: '65.65deg', pitch: '-3.54deg' },
        html: gifHTML('e35'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
    ],
  },
  e18: {
    panorama: 'fotos/Entrada/18.jpg',
    defaultYaw: '56.80deg',
    defaultPitch: '11.91deg',
    markers: [
      {
        id: 'e18-a-e19',
        position: { yaw: '21.73deg', pitch: '-5.18deg' },
        html: gifHTML('e19'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
      {
        id: 'e18-a-e20',
        position: { yaw: '30.85deg', pitch: '0.64deg' },
        html: gifHTML('e20', 'izquierda'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
      {
        id: 'e18-a-e05',
        position: { yaw: '236.39deg', pitch: '-1.98deg' },
        html: gifHTML('e05'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
      {
        id: 'e18-a-e37',
        position: { yaw: '88.14deg', pitch: '26.00deg' },
        html: gifHTML('e37'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
      {
        id: 'e18-a-e36',
        position: { yaw: '80.21deg', pitch: '2.75deg' },
        html: gifHTML('e36'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
      {
        id: 'e18-a-e37b',
        position: { yaw: '72.62deg', pitch: '33.46deg' },
        html: gifHTML('e37b', null, iconoAerea),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
    ],
  },
  e37b: {
    panorama: 'fotos/Aereas/37b.jpg',
    defaultYaw: '199.70deg',
    defaultPitch: '-34.09deg',
    markers: [],
  },
  e19: {
    panorama: 'fotos/Entrada/19.jpg',
    defaultYaw: '59.35deg',
    defaultPitch: '8.71deg',
    markers: [
      {
        id: 'e19-a-e20',
        position: { yaw: '22.31deg', pitch: '-5.53deg' },
        html: gifHTML('e20', 'izquierda'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
      {
        id: 'e19-a-e18',
        position: { yaw: '215.43deg', pitch: '-4.06deg' },
        html: gifHTML('e18'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
      {
        id: 'e19-a-e36',
        position: { yaw: '85.72deg', pitch: '0.03deg' },
        html: gifHTML('e36'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
      {
        id: 'e19-a-e37-2',
        position: { yaw: '136.50deg', pitch: '28.40deg' },
        html: gifHTML('e37'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
      {
        id: 'e19-a-e37b',
        position: { yaw: '131.71deg', pitch: '36.01deg' },
        html: gifHTML('e37b', null, iconoAerea),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
      {
        id: 'e19-a-e50',
        position: { yaw: '40.40deg', pitch: '0.19deg' },
        html: gifHTML('e50'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
    ],
  },
  e50: {
    panorama: 'fotos/Mirador/50.jpg',
    defaultYaw: '47.04deg',
    defaultPitch: '-4.43deg',
    markers: [
      {
        id: 'e50-a-e51',
        position: { yaw: '44.06deg', pitch: '-0.87deg' },
        html: gifHTML('e51'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
      {
        id: 'e50-a-e19',
        position: { yaw: '224.42deg', pitch: '-3.37deg' },
        html: gifHTML('e19'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
      {
        id: 'e50-a-e52',
        position: { yaw: '316.50deg', pitch: '-13.56deg' },
        html: gifHTML('e52', 'abajo'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
      {
        id: 'e50-a-e60',
        position: { yaw: '136.84deg', pitch: '-2.34deg' },
        html: gifHTML('e60'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
    ],
  },
  e52: {
    panorama: 'fotos/Mirador/52.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    markers: [
      {
        id: 'e52-a-e55',
        position: { yaw: '33.72deg', pitch: '-3.15deg' },
        html: gifHTML('e55'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
      {
        id: 'e52-a-e57',
        position: { yaw: '233.52deg', pitch: '-1.22deg' },
        html: gifHTML('e57'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
      {
        id: 'e52-a-e50',
        position: { yaw: '135.25deg', pitch: '9.67deg' },
        html: gifHTML('e50', 'arriba'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
    ],
  },
  e55: {
    panorama: 'fotos/Mirador/55.jpg',
    defaultYaw: '20.85deg',
    defaultPitch: '-3.83deg',
    markers: [
      {
        id: 'e55-a-e52',
        position: { yaw: '215.49deg', pitch: '-4.95deg' },
        html: gifHTML('e52'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
      {
        id: 'e55-a-e56',
        position: { yaw: '48.71deg', pitch: '-2.77deg' },
        html: gifHTML('e56'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
    ],
  },
  e60: {
    panorama: 'fotos/Mirador/60.jpg',
    defaultYaw: '131.95deg',
    defaultPitch: '-8.03deg',
    markers: [
      {
        id: 'e60-a-e38',
        position: { yaw: '151.58deg', pitch: '-3.23deg' },
        html: gifHTML('e38'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
      {
        id: 'e60-a-e90',
        position: { yaw: '44.61deg', pitch: '-2.60deg' },
        html: gifHTML('e90'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
      {
        id: 'e60-a-e50',
        position: { yaw: '328.53deg', pitch: '-11.23deg' },
        html: gifHTML('e50'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
    ],
  },
  e90: {
    panorama: 'fotos/Piscinas/90.jpg',
    defaultYaw: '251.44deg',
    defaultPitch: '-4.96deg',
    markers: [
      {
        id: 'e90-a-e60',
        position: { yaw: '25.24deg', pitch: '-1.55deg' },
        html: gifHTML('e60'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
      {
        id: 'e90-a-e91',
        position: { yaw: '265.26deg', pitch: '-2.58deg' },
        html: gifHTML('e91'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
    ],
  },
  e91: {
    panorama: 'fotos/Piscinas/91.jpg',
    defaultYaw: '133.80deg',
    defaultPitch: '-2.18deg',
    markers: [
      {
        id: 'e91-a-e90',
        position: { yaw: '291.81deg', pitch: '-0.91deg' },
        html: gifHTML('e90'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
      {
        id: 'e91-a-e92',
        position: { yaw: '115.32deg', pitch: '-1.04deg' },
        html: gifHTML('e92'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
    ],
  },
  e92: {
    panorama: 'fotos/Piscinas/92.jpg',
    defaultYaw: '140.63deg',
    defaultPitch: '-0.92deg',
    markers: [
      {
        id: 'e92-a-e91',
        position: { yaw: '282.86deg', pitch: '-1.78deg' },
        html: gifHTML('e91'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
      {
        id: 'e92-a-e100',
        position: { yaw: '66.41deg', pitch: '-1.32deg' },
        html: gifHTML('e100'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
      {
        id: 'e92-a-e110',
        position: { yaw: '125.61deg', pitch: '0.37deg' },
        html: gifHTML('e110'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
    ],
  },
  e100: {
    panorama: 'fotos/Plazoleta/100.jpg',
    defaultYaw: '74.36deg',
    defaultPitch: '-3.12deg',
    markers: [
      {
        id: 'e100-a-e101',
        position: { yaw: '75.35deg', pitch: '-0.90deg' },
        html: gifHTML('e101'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
      {
        id: 'e100-a-e92',
        position: { yaw: '261.00deg', pitch: '-2.45deg' },
        html: gifHTML('e92'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
      {
        id: 'e100-a-e130',
        position: { yaw: '25.79deg', pitch: '5.05deg' },
        html: gifHTML('e130', null, iconoAerea),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
    ],
  },
  e101: {
    panorama: 'fotos/Plazoleta/101.jpg',
    defaultYaw: '68.55deg',
    defaultPitch: '-1.55deg',
    markers: [
      {
        id: 'e101-a-e102',
        position: { yaw: '68.55deg', pitch: '-1.55deg' },
        html: gifHTML('e102'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
      {
        id: 'e101-a-e100',
        position: { yaw: '245.12deg', pitch: '-2.17deg' },
        html: gifHTML('e100'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
    ],
  },
  e102: {
    panorama: 'fotos/Plazoleta/102.jpg',
    defaultYaw: '56.64deg',
    defaultPitch: '-0.70deg',
    markers: [
      {
        id: 'e102-a-e101',
        position: { yaw: '245.31deg', pitch: '-1.51deg' },
        html: gifHTML('e101'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
    ],
  },
  e110: {
    panorama: 'fotos/Racer/110.jpg',
    defaultYaw: '25.25deg',
    defaultPitch: '2.71deg',
    markers: [
      {
        id: 'e110-a-e92',
        position: { yaw: '288.16deg', pitch: '-1.27deg' },
        html: gifHTML('e92'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
      {
        id: 'e110-a-e41',
        position: { yaw: '242.86deg', pitch: '-0.28deg' },
        html: gifHTML('e41'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
      {
        id: 'e110-a-e111',
        position: { yaw: '55.69deg', pitch: '18.53deg' },
        html: gifHTML('e111'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
      {
        id: 'e110-a-e112',
        position: { yaw: '45.40deg', pitch: '20.48deg' },
        html: gifHTML('e112'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
      {
        id: 'e110-a-e113',
        position: { yaw: '49.40deg', pitch: '28.37deg' },
        html: gifHTML('e113', null, iconoAerea),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
    ],
  },
  e111: {
    panorama: 'fotos/Racer/111.jpg',
    defaultYaw: '64.15deg',
    defaultPitch: '-19.59deg',
    markers: [],
  },
  e112: {
    panorama: 'fotos/Racer/112.jpg',
    defaultYaw: '33.47deg',
    defaultPitch: '-10.17deg',
    markers: [],
  },
  e113: {
    panorama: 'fotos/Aereas/113.jpg',
    defaultYaw: '50.47deg',
    defaultPitch: '-17.92deg',
    markers: [],
  },
  e56: {
    panorama: 'fotos/Mirador/56.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    markers: [
      {
        id: 'e56-a-e55',
        position: { yaw: '184.85deg', pitch: '-2.88deg' },
        html: gifHTML('e55'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
    ],
  },
  e57: {
    panorama: 'fotos/Mirador/57.jpg',
    defaultYaw: '212.51deg',
    defaultPitch: '-4.93deg',
    markers: [
      {
        id: 'e57-a-e58',
        position: { yaw: '219.26deg', pitch: '-0.74deg' },
        html: gifHTML('e58'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
      {
        id: 'e57-a-e52',
        position: { yaw: '47.85deg', pitch: '-4.77deg' },
        html: gifHTML('e52'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
    ],
  },
  e58: {
    panorama: 'fotos/Mirador/58.jpg',
    defaultYaw: '188.73deg',
    defaultPitch: '-6.35deg',
    markers: [
      {
        id: 'e58-a-e57',
        position: { yaw: '42.10deg', pitch: '-4.21deg' },
        html: gifHTML('e57'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
      {
        id: 'e58-a-e20',
        position: { yaw: '216.03deg', pitch: '-19.15deg' },
        html: gifHTML('e20'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
    ],
  },
  e51: {
    panorama: 'fotos/Mirador/51.jpg',
    defaultYaw: '41.57deg',
    defaultPitch: '-5.82deg',
    markers: [
      {
        id: 'e51-a-e50',
        position: { yaw: '216.17deg', pitch: '-3.13deg' },
        html: gifHTML('e50'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
      {
        id: 'e51-a-e53',
        position: { yaw: '46.22deg', pitch: '-13.92deg' },
        html: gifHTML('e53', 'abajo'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
    ],
  },
  e53: {
    panorama: 'fotos/Mirador/53.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    markers: [
      {
        id: 'e53-a-e51',
        position: { yaw: '219.43deg', pitch: '16.26deg' },
        html: gifHTML('e51', 'arriba'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
      {
        id: 'e53-a-e54',
        position: { yaw: '346.15deg', pitch: '-3.70deg' },
        html: gifHTML('e54'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
    ],
  },
  e54: {
    panorama: 'fotos/Mirador/54.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    markers: [
      {
        id: 'e54-a-e53',
        position: { yaw: '158.42deg', pitch: '-2.25deg' },
        html: gifHTML('e53'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
      {
        id: 'e54-a-e59',
        position: { yaw: '236.14deg', pitch: '-2.79deg' },
        html: gifHTML('e59'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
    ],
  },
  e59: {
    panorama: 'fotos/Mirador/59.jpg',
    defaultYaw: '223.80deg',
    defaultPitch: '-4.24deg',
    markers: [
      {
        id: 'e59-a-e54',
        position: { yaw: '49.62deg', pitch: '-5.14deg' },
        html: gifHTML('e54'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
      {
        id: 'e59-a-e62',
        position: { yaw: '226.10deg', pitch: '-1.81deg' },
        html: gifHTML('e62'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
    ],
  },
  e62: {
    panorama: 'fotos/Mirador/62.jpg',
    defaultYaw: '221.94deg',
    defaultPitch: '-2.41deg',
    markers: [
      {
        id: 'e62-a-e63',
        position: { yaw: '221.94deg', pitch: '-2.41deg' },
        html: gifHTML('e63'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
      {
        id: 'e62-a-e59',
        position: { yaw: '47.25deg', pitch: '-5.50deg' },
        html: gifHTML('e59'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
    ],
  },
  e63: {
    panorama: 'fotos/Mirador/63.jpg',
    defaultYaw: '223.05deg',
    defaultPitch: '-1.57deg',
    markers: [
      {
        id: 'e63-a-e62',
        position: { yaw: '46.41deg', pitch: '-3.52deg' },
        html: gifHTML('e62'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
      {
        id: 'e63-a-e64',
        position: { yaw: '223.05deg', pitch: '-1.57deg' },
        html: gifHTML('e64'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
    ],
  },
  e64: {
    panorama: 'fotos/Mirador/64.jpg',
    defaultYaw: '217.95deg',
    defaultPitch: '-4.86deg',
    markers: [
      {
        id: 'e64-a-e63',
        position: { yaw: '38.68deg', pitch: '-1.81deg' },
        html: gifHTML('e63'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
      {
        id: 'e64-a-e65',
        position: { yaw: '234.44deg', pitch: '-3.78deg' },
        html: gifHTML('e65'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
    ],
  },
  e65: {
    panorama: 'fotos/Mirador/65.jpg',
    defaultYaw: '194.55deg',
    defaultPitch: '-4.70deg',
    markers: [
      {
        id: 'e65-a-e20',
        position: { yaw: '203.66deg', pitch: '-2.15deg' },
        html: gifHTML('e20'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
      {
        id: 'e65-a-e64',
        position: { yaw: '88.78deg', pitch: '-3.16deg' },
        html: gifHTML('e64'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
    ],
  },
  e61: {
    panorama: 'fotos/Mirador/61.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    markers: [],
  },
  e20: {
    panorama: 'fotos/Spa/20.jpg',
    defaultYaw: '171.47deg',
    defaultPitch: '-1.87deg',
    markers: [
      {
        id: 'e20-a-e19',
        position: { yaw: '140.25deg', pitch: '16.35deg' },
        html: gifHTML('e19', 'arriba'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
      {
        id: 'e20-a-e21',
        position: { yaw: '197.07deg', pitch: '-2.61deg' },
        html: gifHTML('e21'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
      {
        id: 'e20-a-e65',
        position: { yaw: '25.57deg', pitch: '-1.88deg' },
        html: gifHTML('e65'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
    ],
  },
  e21: {
    panorama: 'fotos/Spa/21.jpg',
    defaultYaw: '179.19deg',
    defaultPitch: '-6.76deg',
    markers: [
      {
        id: 'e21-a-e22',
        position: { yaw: '208.78deg', pitch: '-5.92deg' },
        html: gifHTML('e22'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
      {
        id: 'e21-a-e20',
        position: { yaw: '89.47deg', pitch: '-6.67deg' },
        html: gifHTML('e20'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
    ],
  },
  e22: {
    panorama: 'fotos/Spa/22.jpg',
    defaultYaw: '223.31deg',
    defaultPitch: '-4.71deg',
    markers: [
      {
        id: 'e22-a-e23',
        position: { yaw: '224.07deg', pitch: '-3.53deg' },
        html: gifHTML('e23'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
      {
        id: 'e22-a-e21',
        position: { yaw: '42.88deg', pitch: '-2.90deg' },
        html: gifHTML('e21'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
    ],
  },
  e23: {
    panorama: 'fotos/Spa/23.jpg',
    defaultYaw: '195.95deg',
    defaultPitch: '-8.30deg',
    markers: [
      {
        id: 'e23-a-e24',
        position: { yaw: '355.40deg', pitch: '-6.40deg' },
        html: gifHTML('e24'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
      {
        id: 'e23-a-e25',
        position: { yaw: '267.62deg', pitch: '-5.20deg' },
        html: gifHTML('e25'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
      {
        id: 'e23-a-e26',
        position: { yaw: '259.41deg', pitch: '-5.37deg' },
        html: gifHTML('e26'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
      {
        id: 'e23-a-e27',
        position: { yaw: '240.90deg', pitch: '-2.57deg' },
        html: gifHTML('e27'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
      {
        id: 'e23-a-e29',
        position: { yaw: '5.37deg', pitch: '-7.29deg' },
        html: gifHTML('e29'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
      {
        id: 'e23-a-e30',
        position: { yaw: '205.77deg', pitch: '-4.17deg' },
        html: gifHTML('e30'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
    ],
  },
  e24: {
    panorama: 'fotos/Spa/24.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    markers: [
      {
        id: 'e24-a-e23',
        position: { yaw: '162.76deg', pitch: '-7.02deg' },
        html: gifHTML('e23'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
    ],
  },
  e25: {
    panorama: 'fotos/Spa/25.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    markers: [
      {
        id: 'e25-a-e23',
        position: { yaw: '160.71deg', pitch: '-4.77deg' },
        html: gifHTML('e23'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
    ],
  },
  e26: {
    panorama: 'fotos/Spa/26.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    markers: [
      {
        id: 'e26-a-e23',
        position: { yaw: '102.62deg', pitch: '-5.14deg' },
        html: gifHTML('e23'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
    ],
  },
  e27: {
    panorama: 'fotos/Spa/27.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    markers: [
      {
        id: 'e27-a-e23',
        position: { yaw: '160.84deg', pitch: '-4.26deg' },
        html: gifHTML('e23'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
    ],
  },
  e29: {
    panorama: 'fotos/Spa/29.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    markers: [
      {
        id: 'e29-a-e23',
        position: { yaw: '148.18deg', pitch: '-3.23deg' },
        html: gifHTML('e23'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
    ],
  },
  e30: {
    panorama: 'fotos/Spa/30.jpg',
    defaultYaw: '210.62deg',
    defaultPitch: '-5.29deg',
    markers: [
      {
        id: 'e30-a-e31',
        position: { yaw: '210.06deg', pitch: '-4.76deg' },
        html: gifHTML('e31'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
    ],
  },
  e31: {
    panorama: 'fotos/Spa/31.jpg',
    defaultYaw: '210.26deg',
    defaultPitch: '-0.25deg',
    markers: [
      {
        id: 'e31-a-e32',
        position: { yaw: '185.05deg', pitch: '-3.90deg' },
        html: gifHTML('e32'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
      {
        id: 'e31-a-e34',
        position: { yaw: '95.47deg', pitch: '-10.28deg' },
        html: gifHTML('e34'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
      {
        id: 'e31-a-e33',
        position: { yaw: '112.18deg', pitch: '-5.38deg' },
        html: gifHTML('e33'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
      {
        id: 'e31-a-e35',
        position: { yaw: '248.68deg', pitch: '-4.42deg' },
        html: gifHTML('e35'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
      {
        id: 'e31-a-e30',
        position: { yaw: '27.55deg', pitch: '-6.79deg' },
        html: gifHTML('e30'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
    ],
  },
  e32: {
    panorama: 'fotos/Spa/32.jpg',
    defaultYaw: '314.86deg',
    defaultPitch: '-5.71deg',
    markers: [
      {
        id: 'e32-a-e33',
        position: { yaw: '49.38deg', pitch: '-4.57deg' },
        html: gifHTML('e33'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
      {
        id: 'e32-a-e34',
        position: { yaw: '25.60deg', pitch: '-4.30deg' },
        html: gifHTML('e34'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
      {
        id: 'e32-a-e30',
        position: { yaw: '10.23deg', pitch: '-3.08deg' },
        html: gifHTML('e30'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
      {
        id: 'e32-a-e35',
        position: { yaw: '301.79deg', pitch: '-3.06deg' },
        html: gifHTML('e35'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
      {
        id: 'e32-a-e17',
        position: { yaw: '282.06deg', pitch: '-4.16deg' },
        html: gifHTML('e17'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
    ],
  },
  e33: {
    panorama: 'fotos/Spa/33.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    markers: [
      {
        id: 'e33-a-e32',
        position: { yaw: '230.28deg', pitch: '-12.27deg' },
        html: gifHTML('e32'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
    ],
  },
  e34: {
    panorama: 'fotos/Spa/34.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    markers: [
      {
        id: 'e34-a-e32',
        position: { yaw: '216.05deg', pitch: '-10.53deg' },
        html: gifHTML('e32'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
    ],
  },
  e35: {
    panorama: 'fotos/Spa/35.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    markers: [
      {
        id: 'e35-a-e32',
        position: { yaw: '110.73deg', pitch: '-3.86deg' },
        html: gifHTML('e32'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
      {
        id: 'e35-a-e17',
        position: { yaw: '187.39deg', pitch: '-10.81deg' },
        html: gifHTML('e17'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
    ],
  },
  e36: {
    panorama: 'fotos/Twist/36.jpg',
    defaultYaw: '271.82deg',
    defaultPitch: '-8.73deg',
    markers: [
      {
        id: 'e36-a-e38',
        position: { yaw: '103.75deg', pitch: '-4.18deg' },
        html: gifHTML('e38'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
    ],
  },
  e37: {
    panorama: 'fotos/Twist/37.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    markers: [],
  },
  e38: {
    panorama: 'fotos/Piscinas/38.jpg',
    defaultYaw: '97.54deg',
    defaultPitch: '0.03deg',
    markers: [
      {
        id: 'e38-a-e39',
        position: { yaw: '91.03deg', pitch: '-0.34deg' },
        html: gifHTML('e39'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
      {
        id: 'e38-a-e36',
        position: { yaw: '258.05deg', pitch: '-4.54deg' },
        html: gifHTML('e36'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
      {
        id: 'e38-a-e60',
        position: { yaw: '320.42deg', pitch: '-2.09deg' },
        html: gifHTML('e60'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
    ],
  },
  e39: {
    panorama: 'fotos/Piscinas/39.jpg',
    defaultYaw: '90.77deg',
    defaultPitch: '-4.53deg',
    markers: [
      {
        id: 'e39-a-e40',
        position: { yaw: '109.67deg', pitch: '-1.30deg' },
        html: gifHTML('e40'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
      {
        id: 'e39-a-e38',
        position: { yaw: '256.66deg', pitch: '-2.44deg' },
        html: gifHTML('e38'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
    ],
  },
  e40: {
    panorama: 'fotos/Piscinas/40.jpg',
    defaultYaw: '122.27deg',
    defaultPitch: '-2.33deg',
    markers: [
      {
        id: 'e40-a-e41',
        position: { yaw: '125.63deg', pitch: '-2.78deg' },
        html: gifHTML('e41'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
      {
        id: 'e40-a-e39',
        position: { yaw: '296.08deg', pitch: '-4.32deg' },
        html: gifHTML('e39'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
    ],
  },
  e41: {
    panorama: 'fotos/Piscinas/41.jpg',
    defaultYaw: '94.26deg',
    defaultPitch: '0.53deg',
    markers: [
      {
        id: 'e41-a-e40',
        position: { yaw: '308.55deg', pitch: '1.30deg' },
        html: gifHTML('e40'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
      {
        id: 'e41-a-e110',
        position: { yaw: '69.18deg', pitch: '-1.68deg' },
        html: gifHTML('e110'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
    ],
  },
};
