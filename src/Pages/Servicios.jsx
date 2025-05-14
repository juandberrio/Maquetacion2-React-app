import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, DollarSign, Star as StarIcon, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Cursos',
      description:
        'Cursos y Certicaciones para el mundo laboral.',
      
      price: 'Desde ',
      rating: 4.8,
      featured: true,
    },
    {
      id: 2,
      title: 'Basica Primaria',
      description:
        'Basica primaria para jovenes desde las edades de 7 en adelante',
        
      price: 'Desde',
      rating: 4.9,
      featured: true,
    },
    {
      id: 3,
      title: 'Basica secundaria',
      description:
        'Para jovenes desde los 14 en adelante',
      
      price: 'Desde ',
      rating: 4.7,
      featured: false,
    },
    
  ];

  return (
    <section className="servicios">
      
      <header className="servicios-header">
        <h1>Nuestros Servicios</h1>
        <p>
          Ofrecemos una amplia Trayectoria en educacion tanto para el mundo laboral como ambito educativo para la juventud.
        </p>
      </header>

      
      <div className="servicios-featured">
        <h2>Servicios Destacados</h2>
        <div className="featured-grid">
          {services
            .filter(s => s.featured)
            .map(s => (
              <div key={s.id} className="servicios-card">
                <img src={s.image} alt={s.title} />
                <div className="servicios-card__body">
                  <div className="servicios-card__top">
                    <h3>{s.title}</h3>
                    <span className="badge">Destacado</span>
                  </div>
                  <div className="servicios-card__rating">
                    <StarIcon /> {s.rating.toFixed(1)}/5
                  </div>
                  <p className="servicios-card__desc">{s.description}</p>
                  <div className="servicios-card__footer">
                    <div className="servicios-card__price">
                      <DollarSign /> {s.price}
                    </div>
                    <Link to={`/servicios/${s.id}`} className="btn-secondary">
                      Detalles <ArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      
      <div className="servicios-all">
        <h2>Todos los Servicios</h2>
        <div className="all-grid">
          {services.map(s => (
            <div key={s.id} className="servicios-card-simple">
              <img src={s.image} alt={s.title} />
              <h3>{s.title}</h3>
              <div className="servicios-card-simple__info">
                <StarIcon /> {s.rating.toFixed(1)}/5
                <Calendar /> Disponible
              </div>
              <p className="servicios-card-simple__desc">{s.description}</p>
              <div className="servicios-card-simple__footer">
                <span className="price"><DollarSign /> {s.price}</span>
                <Link to={`/servicios/${s.id}`} className="btn-secondary">
                  preguntar por el Servicio que desees
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      
      <div className="servicios-cta">
        <h2>buscas el servicio de educacion que deseas</h2>
        <p>Contáctenos para una asesoria gratuita.</p>
        <Link to="/contact" className="btn-primary">
          Contactar Ahora <ArrowRight />
        </Link>
      </div>
    </section>
  );
}
