import { Component } from '@angular/core';

@Component({
  selector: 'app-services-home',
  templateUrl: './services-home.component.html',
  styleUrls: ['./services-home.component.css'],
})
export class ServicesHomeComponent {
  services: {service: string; title: string; message: string; more: string; image: string}[] = [
    {
      service: 'PLANES DE MEMBRESÍA',
      title: 'WeWork All Access',
      message:
        'Trabaja desde los espacios de trabajao compartido en las áreas comunes de todas las ubicaciones de WeWork en el mundo.',
      more: 'Conoce más de la membresía WeWork All Access',
      image: 'assets/banner-home-1.webp'
    },
    {
      service: 'ESPACIOS PARA TRABAJAR',
      title: 'Oficina privada',
      message:
        'Contrata tu espacio de trabajo privado en la ubicación que más te guste y del tamaño que se adapte a tu empresa.',
      more: 'Más sobre oficinas privadas y exclusivas',
      image: 'assets/banner-home-2.webp'
    },
    {
      service: 'EVENTOS',
      title: 'Organiza tu Evento en WeWork',
      message:
        'Conoce los mejores espacios para hacer de tu evento corporativo todo un éxito.',
      more: 'Conocé nuestros espacios para tus eventos corporativos',
      image: 'assets/banner-home-3.webp'
    },
    {
      service: 'SOCIOS',
      title: 'Tu Marca en WeWork',
      message:
        'Comunica tus productos dentro de todos nuestros canales para llegar de manera directa a las audiencias que estás buscando.',
      more: 'Trae tu marca',
      image: 'assets/banner-home-4.webp'
    },
  ];

  constructor() {}
}
