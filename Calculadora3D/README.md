# Calculadora 3D

Calculadora 3D es una aplicación web que permite a los usuarios calcular los costos de impresión 3D y convertir medidas entre diferentes unidades. Esta aplicación está diseñada para ser fácil de usar y accesible desde cualquier dispositivo.

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

```
Calculadora3D
├── src
│   ├── index.html        # Documento HTML principal de la aplicación
│   ├── styles.css       # Estilos para la aplicación
│   ├── app.js           # Lógica de la aplicación
│   ├── manifest.json     # Manifiesto de la aplicación web
│   └── service-worker.js  # Código del service worker para funcionalidad offline
├── assets
│   └── icons
│       ├── icon-192x192.png  # Icono de la aplicación (192x192)
│       └── icon-512x512.png  # Icono de la aplicación (512x512)
└── README.md            # Documentación del proyecto
```

## Instalación

Para utilizar la aplicación, simplemente abre el archivo `index.html` en un navegador web moderno. La aplicación también puede ser instalada en dispositivos móviles como una PWA (Progressive Web App).

## Funcionalidades

- **Cálculo de Costos**: Permite a los usuarios ingresar datos sobre el filamento, costo, potencia de la impresora, tiempo de impresión y margen de ganancia para calcular el costo total y el precio de venta.
- **Conversión de Medidas**: Convierte milímetros a centímetros y pulgadas.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar la aplicación, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT.