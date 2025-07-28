document.addEventListener("DOMContentLoaded", function () {
  // --- 1. DATOS DE LOS PRODUCTOS ---
  // Aquí puedes añadir, editar o eliminar productos fácilmente.
  const allProducts = [
    // Adaptadores Wi-Fi
    {
      name: "Archer TX1U Nano",
      description:
        "Adaptador Wi-Fi 6 AX300 de tamaño nano. La forma más pequeña de obtener velocidades de última generación.",
      imageUrl:
        "images/archer-tx-1u-nano_front.jpg",
      productUrl: "Archer-TX1U-Nano.html",
    },
    {
      name: "Archer T2U Nano",
      description:
        "Adaptador Wi-Fi AC600 de doble banda. Conectividad compacta y conveniente para tu portátil o PC.",
      imageUrl:
        "images/archer-t2-unano_front.jpg",
      productUrl: "ArcherT2UNano.html",
    },
    {
      name: "Archer T2UB Nano",
      description:
        "Wi-Fi 5 y Bluetooth 4.2 en un solo adaptador nano. Conectividad dual para máxima versatilidad.",
      imageUrl:
        "images/archer-t2ub-nano_front.png",
      productUrl: "Archer-T2UB-Nano.html",
    },
    {
      name: "Archer T2U",
      description:
        "Adaptador USB Wi-Fi AC600 de doble banda. Disfruta de streaming HD y juegos en línea sin lag.",
      imageUrl:
        "images/archer-t2u_front.jpg",
      productUrl: "ARCHER-T2U.html",
    },
    {
      name: "Archer T2U Plus",
      description:
        "Adaptador Wi-Fi de alta ganancia. Su antena potente mejora la recepción para una señal más estable.",
      imageUrl:
        "images/archer-t2u-plus_front.jpg",
      productUrl: "ArcherT2UPlus.html",
    },
    {
      name: "Archer T3U Nano",
      description:
        "Adaptador Wi-Fi AC1300 de tamaño nano. Velocidad y rendimiento superior en un diseño ultra compacto.",
      imageUrl:
        "images/archer-t3u-nano_front.jpg",
      productUrl: "Archer-T3U-Nano.html",
    },
    {
      name: "Archer T4U",
      description:
        "Adaptador USB 3.0 Wi-Fi AC1300. Transfiere datos a velocidades ultra rápidas para un rendimiento máximo.",
      imageUrl:
        "images/archer-t4u_front.jpg",
      productUrl: "Archer-T4U.html",
    },
    {
      name: "Archer T4U Plus",
      description:
        "Adaptador Wi-Fi de alta ganancia con dos antenas. Cobertura flexible y ampliada para tu escritorio.",
      imageUrl:
        "images/archer-t4u-plus_front.jpg",
      productUrl: "Archer-T4U-Plus.html",
    },
    {
      name: "Archer T4E",
      description:
        "Adaptador PCIe Wi-Fi AC1200. Instálalo en tu PC de escritorio para una conexión inalámbrica de alta velocidad.",
      imageUrl:
        "images/archert4e_front.webp",
      productUrl: "ArcherT4E.html",
    },
    {
      name: "Archer TX20UH",
      description:
        "Adaptador USB Wi-Fi 6 AX1800 de alta ganancia. Potencia tu conexión con la última tecnología Wi-Fi.",
      imageUrl:
        "images/archer-tx20uh_front.jpg",
      productUrl: "Archer-TX20UH.html",
    },
    {
      name: "Archer TX55E",
      description:
        "Adaptador PCIe con Wi-Fi 6 y Bluetooth 5.2. La actualización definitiva para juegos y streaming.",
      imageUrl:
        "images/archer-tx55e_front.jpg",
      productUrl: "Archer-TX55E.html",
    },

    // Routers
    {
      name: "Archer C24",
      description:
        "Router Wi-Fi AC750 de doble banda. Compacto, fiable y perfecto para el streaming y la navegación diaria.",
      imageUrl:
        "images/archerc24_front.jpg",
      productUrl: "ArcherC24.html",
    },
    {
      name: "Archer C50",
      description:
        "Router inalámbrico Wi-Fi AC1200. Una solución robusta para hogares con múltiples dispositivos conectados.",
      imageUrl:
        "images/archer-c50_front.jpg",
      productUrl: "ARCHER-C50.html",
    },
    {
      name: "Archer C6",
      description:
        "Router Gigabit Wi-Fi AC1200 MU-MIMO. Optimizado para un rendimiento superior y cobertura completa.",
      imageUrl:
        "images/archerc6_front.jpg",
      productUrl: "ArcherC6.html",
    },
    {
      name: "Archer C80",
      description:
        "Router Wi-Fi AC1900 MU-MIMO. Alto rendimiento para juegos, streaming 4K y conexiones exigentes.",
      imageUrl:
        "images/archerc80_front.jpg",
      productUrl: "ArcherC80.html",
    },
    {
      name: "Archer AX10",
      description:
        "Router Wi-Fi 6 AX1500. Entra al mundo del Wi-Fi 6 con velocidades más rápidas y mayor capacidad.",
      imageUrl:
        "images/archerax10_front.jpg",
      productUrl: "ArcherAX10.html",
    },
    {
      name: "Archer MR400",
      description:
        "Router 4G+ Cat6 Wi-Fi AC1200. Comparte tu red 4G LTE en cualquier lugar con una simple tarjeta SIM.",
      imageUrl:
        "images/archermr400apac_front.jpg",
      productUrl: "ArcherMR400-V4.30.html",
    },
    {
      name: "Archer AXE75",
      description:
        "Router Wi-Fi 6E AXE5400. Explora la nueva banda de 6 GHz para un streaming sin congestión.",
      imageUrl:
        "images/archer-axe75_front.jpg",
      productUrl: "Archer-AXE75.html",
    },

    // Switches y Extensores Mercusys
    {
      name: "Mercusys MS105G",
      description:
        "Switch de escritorio con 5 puertos Gigabit. Expande tu red cableada con velocidad y simplicidad.",
      imageUrl:
        "images/ms105g_front.jpg",
      productUrl: "MS105G.html",
    },
    {
      name: "Mercusys MW302R",
      description:
        "Router inalámbrico N300 Multi-Modo. Un dispositivo versátil para todas tus necesidades de red básicas.",
      imageUrl:
        "images/mw302r_front.jpg",
      productUrl: "MW302R.html",
    },
    {
      name: "Mercusys MW300RE",
      description:
        "Extensor de rango Wi-Fi N300. Elimina las zonas muertas y lleva la señal a cada rincón de tu hogar.",
      imageUrl:
        "images/mw300re_front.jpg",
      productUrl: "MW300RE.html",
    },
    {
      name: "Mercusys MS108G",
      description:
        "Switch de escritorio con 8 puertos Gigabit. Ideal para transferencias de archivos rápidas en casa o la oficina.",
      imageUrl:
        "images/ms108g_front.webp",
      productUrl: "MS108G.html",
    },
    {
      name: "Mercusys MW306R",
      description:
        "Router inalámbrico N300 con antenas de alta ganancia para una cobertura Wi-Fi mejorada.",
      imageUrl:
        "images/mw306r_front.jpg",
      productUrl: "MW306R.html",
    },
    {
      name: "Mercusys ME30",
      description:
        "Extensor de rango Wi-Fi AC1200. Expande tu red de doble banda para un streaming y juegos fluidos.",
      imageUrl:
        "images/me30_front.jpg",
      productUrl: "ME30.html",
    },

    // Routers Mercusys
    {
      name: "Mercusys MR30G",
      description:
        "Router Gigabit Wi-Fi AC1200. Velocidades de doble banda para un entretenimiento en línea sin interrupciones.",
      imageUrl:
        "images/mr30g_front.jpg",
      productUrl: "MR30G.html",
    },
    {
      name: "Mercusys MR50G",
      description:
        "Router Gigabit Wi-Fi AC1900. Potencia y velocidad para hogares con alta demanda de conexión.",
      imageUrl:
        "images/mr50g_front.jpg",
      productUrl: "MR50G.html",
    },
    {
      name: "Mercusys AC12G",
      description:
        "Router Gigabit Wi-Fi AC1200 de doble banda. Conexión estable y rápida para todos tus dispositivos.",
      imageUrl:
        "images/ac12g_front.jpg",
      productUrl: "AC12G.html",
    },
    {
      name: "Mercusys MR60X",
      description:
        "Router Wi-Fi 6 AX1500. Actualiza tu hogar a la nueva generación de Wi-Fi con más velocidad y capacidad.",
      imageUrl:
        "images/mr60x_front.jpg",
      productUrl: "MR60X.html",
    },
    {
      name: "Mercusys MR80X",
      description:
        "Router Wi-Fi 6 AX3000 de doble banda. Rendimiento excepcional para juegos, streaming y el hogar inteligente.",
      imageUrl:
        "images/mr80x_front.jpg",
      productUrl: "MR80X.html",
    },

    // Sistemas Mesh
    {
      name: "Halo H30G (3-pack)",
      description:
        "Sistema Wi-Fi Mesh AC1300 para todo el hogar. Cobertura unificada y sin interrupciones en cada rincón.",
      imageUrl:
        "images/halo-h30g(3-pack)_front.jpg",
      productUrl: "Halo-H30G(3-pack).html",
    },
    {
      name: "Halo H50G (3-pack)",
      description:
        "Sistema Wi-Fi Mesh AC1900 de alta velocidad. Cubre hasta 550 m² con una red Wi-Fi potente y estable.",
      imageUrl:
        "images/haloh50g3-pack_front.jpg",
      productUrl: "HaloH50G3-pack.html",
    },
  ];

  // --- 2. CONFIGURACIÓN DE LA PAGINACIÓN ---
  const productsPerPage = 12; // Cambia este número para mostrar más o menos productos por página
  let currentPage = 1;

  const productGrid = document.getElementById("product-grid");
  const paginationControls = document.getElementById("pagination-controls");

  function displayProducts() {
    productGrid.innerHTML = ""; // Limpiar la cuadrícula
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const paginatedProducts = allProducts.slice(startIndex, endIndex);

    paginatedProducts.forEach((product) => {
      const productCard = `
        <div class="group flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div class="w-full h-48 bg-gray-50 flex items-center justify-center p-4">
                <img src="${product.imageUrl}" alt="${product.name}" class="max-h-full max-w-full object-contain">
            </div>
            <div class="p-5 flex flex-col flex-grow">
                <h3 class="text-lg font-bold text-gray-800 mb-2">${product.name}</h3>
                <p class="text-sm text-gray-600 mb-4 flex-grow">${product.description}</p>
                <a href="${product.productUrl}" class="mt-auto w-full text-center bg-blue-600 text-white font-semibold py-2.5 rounded-md hover:bg-blue-700 transition-colors duration-300">
                    Ver Producto
                </a>
            </div>
        </div>
    `;
      productGrid.innerHTML += productCard;
    });
  }

  function setupPagination() {
    paginationControls.innerHTML = ""; // Limpiar controles
    const pageCount = Math.ceil(allProducts.length / productsPerPage);

    for (let i = 1; i <= pageCount; i++) {
      const button = document.createElement("button");
      button.innerText = i;
      button.classList.add(
        "px-4",
        "py-2",
        "text-sm",
        "font-semibold",
        "rounded-md",
        "transition-colors",
        "duration-200"
      );

      if (i === currentPage) {
        button.classList.add("bg-blue-600", "text-white", "cursor-default");
      } else {
        button.classList.add(
          "bg-white",
          "text-blue-600",
          "border",
          "border-gray-300",
          "hover:bg-gray-100"
        );
        button.addEventListener("click", () => {
          currentPage = i;
          displayProducts();
          setupPagination();
          // Opcional: Desplazar al inicio de la cuadrícula de productos
          productGrid.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        });
      }
      paginationControls.appendChild(button);
    }
  }

  // --- 3. INICIALIZACIÓN ---
  displayProducts();
  setupPagination();
});
