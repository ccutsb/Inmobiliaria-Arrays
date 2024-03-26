// propiedades_alquiler
const propiedadesAlquiler = [
  {
    nombre: "Apartamento en el centro de la ciudad",
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    descripcion: "Cómodas cabañas de madera a los pies de la montaña",
    ubicacion: "456 Ocean Avenue,Seaside Town, CA 56789",
    habitaciones: 3,
    baños: 3,
    costo: 2500,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Apartamento luminoso con vista al mar",
    src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    descripcion: "Cómodas cabañas de madera a los pies de la montaña",
    ubicacion: "123 Main Street,Anytown, CA 91234",
    habitaciones: 2,
    baños: 2,
    costo: 2000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Condominio moderno en zona residencial",
    src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    descripcion:
      "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
    ubicacion: "123 Main Street,Anytown, CA 91234",
    habitaciones: 2,
    baños: 2,
    costo: 2200,
    smoke: false,
    pets: false,
  },
];

const alquilerContainer = document.querySelector("#alquiler");
let allAlquiler = "";

for (const propiedad of propiedadesAlquiler) {
  allAlquiler += `
<div class="col-md-4 mb-4">
<div class="card">
<img src="${propiedad.src}" class="card-img-top" alt="Cabaña en las montañas"/>
<div class="card-body">
<h5 class="card-title">${propiedad.nombre}</h5>
<p class="card-text">${propiedad.descripcion} </p>
<p><i class="fas fa-map-marker-alt"></i>${propiedad.ubicacion}</p>
<p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones</p>
<i class="fas fa-bath"></i> ${propiedad.baños} Baños</p>
<p><i class="fas fa-dollar-sign"></i>${propiedad.costo}</p>
${
  propiedad.smoke
    ? '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>'
    : '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>'
}
${
  propiedad.pets
    ? '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>'
    : '<p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>'
}
  </div>
  </div>
  </div>
  `;
}

alquilerContainer.innerHTML = allAlquiler;

// propiedades_venta

const propiedadesVenta = [
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "123 Luxury Lane,Prestige Suburb, CA 45678",
    habitaciones: 4,
    baños: 4,
    costo: 5000,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Apartamento acogedor en la montaña",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    descripcion:
      "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    ubicacion: "789 Mountain Road,Summit Peaks, CA 23456",
    habitaciones: 2,
    baños: 1,
    costo: 1200,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Penthouse de lujo con terraza panorámica",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    descripcion:
      "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: 3,
    baños: 3,
    costo: 4500,
    smoke: false,
    pets: true,
  },
];

const ventaContainer = document.querySelector("#venta");
let allVenta = "";

for (const propiedad of propiedadesVenta) {
  allVenta += `
<div class="col-md-4 mb-4">
<div class="card">
<img src="${propiedad.src}" class="card-img-top" alt="Cabaña en las montañas"/>
<div class="card-body">
<h5 class="card-title">${propiedad.nombre}</h5>
<p class="card-text">${propiedad.descripcion} </p>
<p><i class="fas fa-map-marker-alt"></i>${propiedad.ubicacion}</p>
<p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones</p>
<i class="fas fa-bath"></i> ${propiedad.baños} Baños</p>
<p><i class="fas fa-dollar-sign"></i>${propiedad.costo}</p>
${
  propiedad.smoke
    ? '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>'
    : '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>'
}
${
  propiedad.pets
    ? '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>'
    : '<p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>'
}
</div>
</div>
</div>
`;
}

ventaContainer.innerHTML = allVenta;
