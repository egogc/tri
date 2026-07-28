// ─────────────────────────────────────────────
// datos.js — Escenas y marcadores del tour 360°
// ─────────────────────────────────────────────

const transformDir = {
  derecha: '',
  izquierda: 'transform: scaleX(-1);',
  arriba: 'transform: rotate(-90deg);',
  abajo: 'transform: rotate(90deg);',
};

const iconoDefault = { normal: 'fotos/circle.gif', hover: 'fotos/circle2.png', width: 50, height: 50 };

function claseIcono(icono) {
  return icono.sombra ? 'marcador-icono con-sombra' : 'marcador-icono';
}

export function marcadorHTML(label, escenaDestino, direccion = 'derecha', icono = iconoDefault) {
  const estilo = transformDir[direccion] || '';
  return `
    <div class="marcador" onclick="irA('${escenaDestino}')">
      <div class="${claseIcono(icono)}">
        <img class="normal" src="${icono.normal}" width="${icono.width}" height="${icono.height}">
        <img class="hover"  src="${icono.hover}" width="${icono.width}" height="${icono.height}" style="${estilo}">
      </div>
      <div class="marcador-label">
        <span>${label}</span>
      </div>
    </div>`;
}

export function marcadorImagenHTML(imagenSrc, escenaDestino, direccion = 'derecha', icono = iconoDefault) {
  const estilo = transformDir[direccion] || '';
  return `
    <div class="marcador" onclick="irA('${escenaDestino}')">
      <div class="${claseIcono(icono)}">
        <img class="normal" src="${icono.normal}" width="${icono.width}" height="${icono.height}">
        <img class="hover"  src="${icono.hover}" width="${icono.width}" height="${icono.height}" style="${estilo}">
      </div>
      <div class="marcador-label">
        <img src="${imagenSrc}">
      </div>
    </div>`;
}

export function gifHTML(escenaDestino, direccion = 'derecha', icono = iconoDefault) {
  const estilo = transformDir[direccion] || '';
  return `
    <div class="marcador" onclick="irA('${escenaDestino}')">
      <div class="${claseIcono(icono)}">
        <img class="normal" src="${icono.normal}" width="${icono.width}" height="${icono.height}">
        <img class="hover"  src="${icono.hover}" width="${icono.width}" height="${icono.height}" style="${estilo}">
      </div>
    </div>`;
}

const iconoE01 = { normal: 'fotos/pin.gif', hover: 'fotos/pin2.png', width: 50, height: 80, sombra: true };

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
        position: { yaw: '234.07deg', pitch: '-52.98deg' },
        html: gifHTML('e02', 'derecha', iconoE01),
        size: { width: 320, height: 80 },
        anchor: 'left center',
      },
      {
        id: 'e01-a-e04',
        position: { yaw: '248.51deg', pitch: '-36.65deg' },
        html: gifHTML('e04', 'derecha', iconoE01),
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
        position: { yaw: '272.64deg', pitch: '-38.82deg' },
        html: marcadorImagenHTML('fotos/twister.webp', 'e18', 'derecha', iconoE01),
        size: { width: 320, height: 80 },
        anchor: 'left center',
      },
      {
        id: 'e01-a-e20',
        position: { yaw: '274.58deg', pitch: '-32.25deg' },
        html: marcadorImagenHTML('fotos/spa.webp', 'e20', 'derecha', iconoE01),
        size: { width: 320, height: 80 },
        anchor: 'left center',
      },
      {
        id: 'e01-a-e07',
        position: { yaw: '253.07deg', pitch: '-27.51deg' },
        html: marcadorHTML('Yariguies', 'e07', 'derecha', iconoE01),
        size: { width: 320, height: 80 },
        anchor: 'left center',
      },
      {
        id: 'e01-a-e39',
        position: { yaw: '294.97deg', pitch: '-53.70deg' },
        html: marcadorHTML('Piscinas', 'e39', 'derecha', iconoE01),
        size: { width: 320, height: 80 },
        anchor: 'left center',
      },
    ],
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
    ],
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
        id: 'e19-a-e37',
        position: { yaw: '41.13deg', pitch: '-0.24deg' },
        html: gifHTML('e37'),
        size: { width: 320, height: 50 },
        anchor: 'left center',
      },
    ],
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
        id: 'e38-a-e37',
        position: { yaw: '234.68deg', pitch: '15.61deg' },
        html: gifHTML('e37'),
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
    ],
  },
};
