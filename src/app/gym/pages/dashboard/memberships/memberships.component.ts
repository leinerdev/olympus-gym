import { Component, OnInit } from '@angular/core';

export interface Membership {
  name: string;
  price: number;
  price_offer: number;
  description: string;
  image: string;
}
@Component({
  selector: 'app-memberships',
  templateUrl: './memberships.component.html',
  styleUrls: ['./memberships.component.css'],
})
export class MembershipsComponent implements OnInit {
  zeusMembership: Membership = {
    name: 'Plan Zéus',
    description:
      'Acceso a todas las sedes con las que cuente el gimnasio. Acceso ilimitado durante el mes a las clases grupales de zumba, spinning, yoga, pilates, Cross Training; Xcore; Body Combat; HBX Boxing. Acceso ilimitado al área de spa y piscina durante todo el mes. Asesoramiento personalizado con un profesional en nutrición y dietética.  Rutina personalizada de acuerdo a las necesidades del usuario en conjunto con un acompañamiento constante por parte del equipo de instructores.',
    price_offer: 399000,
    price: 449000,
    image: '../../../../../assets/memberships/zeus.png'
  };

  poseidonMembership: Membership = {
    name: 'Plan Poseidón',
    description:
      'Acceso a todas las sedes con las que cuente el gimnasio. Acceso a diez clases grupales de zumba, spinning, yoga, pilates o Body Combat, (el usuario puede elegir si desea ingresar a todas las clases ofertadas, teniendo en cuenta que solo podrá tener dos accesos por clase ofertada, cumpliendo así el cupo de las diez durante el mes). Un acceso al área de spa y un acceso al área de piscina durante el mes. Rutina personalizada de acuerdo a las necesidades que plantee el usuario y acompañamiento periódico por parte del equipo de instructores. Este plan no incluye: Asesoramiento personalizado con un profesional en nutrición y dietética; acceso a las clases grupales de Cross Training y HBX Boxing.',
    price_offer: 199000,
    price: 249000,
    image: '../../../../../assets/memberships/poseidon.png'
  };

  herculesMembership: Membership = {
    name: 'Plan Hércules',
    description:
      'Acceso a todas las sedes con las que cuente el gimnasio. Acceso ilimitado durante el mes a las clases grupales de zumba, spinning, yoga, pilates, Cross Training; Xcore; Body Combat; HBX Boxing. Acceso ilimitado al área de spa y piscina durante todo el mes. Asesoramiento personalizado con un profesional en nutrición y dietética.  Rutina personalizada de acuerdo a las necesidades del usuario en conjunto con un acompañamiento constante por parte del equipo de instructores.',
    price_offer: 99000,
    price: 149000,
    image: '../../../../../assets/memberships/hercules.png'
  };

  constructor() {}

  ngOnInit(): void {}
}
