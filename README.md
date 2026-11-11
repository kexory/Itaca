# Ítaca — Experiencia literaria digital de Kexory

Proyecto estático creado con HTML, CSS y JavaScript. No requiere instalación ni compilación.

## Estructura

- `index.html`: contenido y estructura de la página.
- `assets/css/styles.css`: diseño adaptable, animaciones y estilos.
- `assets/js/main.js`: interacciones, aparición al desplazarse y generador QR.
- `data/poem.js`: espacio para incorporar las estrofas de la traducción autorizada.
- `assets/img/`: carpeta para imágenes adicionales.

## Poema

El texto facilitado para el proyecto ya está incorporado en `data/poem.js`, separado en cinco estrofas y con saltos de verso. La página carga automáticamente ese archivo y presenta cada estrofa como un bloque independiente.

## Probar localmente

Abre `index.html` en un navegador moderno. Para probar la experiencia completa, se recomienda usar un servidor local sencillo (por ejemplo, la extensión Live Server de Visual Studio Code). Algunas funciones externas, como las fuentes y la biblioteca QR, requieren conexión a internet.

## Publicar gratis con GitHub Pages

1. Crea un repositorio público llamado `itaca-kexory` en GitHub.
2. Sube el contenido de esta carpeta (no el ZIP) a la raíz del repositorio.
3. En GitHub abre **Settings → Pages**.
4. En **Build and deployment**, selecciona **Deploy from a branch**.
5. Selecciona `main` y `/ (root)`, guarda y espera a que GitHub publique el sitio.
6. La dirección normalmente tendrá este formato: `https://TU-USUARIO.github.io/itaca-kexory/`.

## Generar el QR definitivo (por separado)

El QR NO forma parte de la página web. Se imprime como una imagen independiente y, al escanearlo, abre directamente la página publicada.

1. Publica el sitio en GitHub Pages y copia su URL pública.
2. Abre un generador de QR confiable, por ejemplo https://www.qrcode-monkey.com/.
3. Pega la URL pública completa y genera un QR estático.
4. Descarga el QR en PNG de alta resolución.
5. Escanéalo con otro teléfono antes de imprimirlo.

**Importante:** el QR no debe apuntar a `localhost`, a un archivo de tu computadora ni a una vista previa privada. Debe contener la URL pública final.

## Datos bibliográficos

- Autor: Konstantinos Petrou Kavafis (1863–1933).
- Título original: Ιθάκη (Ítaca).
- Idioma original: griego.
- Primera publicación: noviembre de 1911, revista *Grammata*, Alejandría.
- Inspiración clásica: el viaje de Odiseo en la *Odisea*.

## Créditos

Experiencia digital creada por Erick Cruz.
Concepto y sello de presentación: KexIA, inteligencia artificial de Kexory.

## Fuentes

- Centro de Lengua Griega: https://www.greek-language.gr/digitalResources/ancient_greek/navigator/browse.html?object_id=20187
- Centro de Lengua Griega: https://www.greek-language.gr/digitalResources/ancient_greek/education/mythology/epic/record.html?rid=349&tbl=epic
- Primera publicación (reproducción digital): https://commons.wikimedia.org/wiki/File:Ithaka_by_Kavafis,_Grammata_magazine_vol_9-10,_1911.pdf
