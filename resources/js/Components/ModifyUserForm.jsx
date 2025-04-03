import { Link, router, useForm as useFormInertia } from '@inertiajs/react';
import { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import NavLink from './NavLink';

export default function ModifyUserForm({ usuariosOAL, contadorUsuarios }) {
    const {
        register: register2,
        formState,
        control: control2,
        handleSubmit: handleSubmit2,
        setValue: setValue2,
    } = useForm();

    const { errors } = formState;

    const ocupacionOptions = [
        { value: 'No especificado', label: 'No especificado' },
        { value: 'Abogado/a', label: 'Abogado/a' },
        {
            value: 'Acompañante de autobús escolar',
            label: 'Acompañante de autobús escolar',
        },
        {
            value: 'Administrativo/a comercial',
            label: 'Administrativo/a comercial',
        },
        {
            value: 'Administrativo/a personal',
            label: 'Administrativo/a personal',
        },
        { value: 'Agente comercial', label: 'Agente comercial' },
        {
            value: 'Agente forestal y medioambiental',
            label: 'Agente forestal y medioambiental',
        },
        { value: 'Albañil', label: 'Albañil' },
        { value: 'Alfarero/a - ceramista', label: 'Alfarero/a - ceramista' },
        {
            value: 'Analista de agua en general',
            label: 'Analista de agua en general',
        },
        {
            value: 'Analista de laboratorio de química industrial',
            label: 'Analista de laboratorio de química industrial',
        },
        {
            value: 'Apoyo a la gestión administrativa (aux adtvo)',
            label: 'Apoyo a la gestión administrativa (aux adtvo)',
        },
        { value: 'Auxiliar de enfermería', label: 'Auxiliar de enfermería' },
        { value: 'Auxiliar de farmacia', label: 'Auxiliar de farmacia' },
        {
            value: 'Auxiliar de vigilante de seguridad no habitado para ir armado',
            label: 'Auxiliar de vigilante de seguridad no habitado para ir armado',
        },
        { value: 'Ayuda a domicilio', label: 'Ayuda a domicilio' },
        { value: 'Ayudante de cocina', label: 'Ayudante de cocina' },
        { value: 'Barrendero/a', label: 'Barrendero/a' },
        { value: 'Biologo/a', label: 'Biologo/a' },
        { value: 'Cajero/a de comercio', label: 'Cajero/a de comercio' },
        { value: 'Camarero/a de piso', label: 'Camarero/a de piso' },
        { value: 'Camarero/a general', label: 'Camarero/a general' },
        { value: 'Carpinero de aluminio', label: 'Carpinero de aluminio' },
        {
            value: 'Chapista y pintores de vehículos',
            label: 'Chapista y pintores de vehículos',
        },
        { value: 'Cocinero/a', label: 'Cocinero/a' },
        { value: 'Community Manager', label: 'Community Manager' },
        {
            value: 'Conductor/a de ambulancia',
            label: 'Conductor/a de ambulancia',
        },
        { value: 'Conductor/a de autobús', label: 'Conductor/a de autobús' },
        { value: 'Conductor/a de camiones', label: 'Conductor/a de camiones' },
        { value: 'Conductor/a de trailer', label: 'Conductor/a de trailer' },
        {
            value: 'Conductor/a maquinaria de transporte de tierras',
            label: 'Conductor/a maquinaria de transporte de tierras',
        },
        {
            value: 'Controlador/a de accesos',
            label: 'Controlador/a de accesos',
        },
        { value: 'Cuidador/a', label: 'Cuidador/a' },
        {
            value: 'Cuidador/a de animales y adiestradores',
            label: 'Cuidador/a de animales y adiestradores',
        },
        {
            value: 'Cuidador/a de niños en domicilio',
            label: 'Cuidador/a de niños en domicilio',
        },
        {
            value: 'Cuidador/a de niños en guarderías',
            label: 'Cuidador/a de niños en guarderías',
        },
        {
            value: 'Dependiente/a de carnicería y charcutería',
            label: 'Dependiente/a de carnicería y charcutería',
        },
        {
            value: 'Dependiente/a de comercio en general',
            label: 'Dependiente/a de comercio en general',
        },
        {
            value: 'Dependiente/a de floristería',
            label: 'Dependiente/a de floristería',
        },
        {
            value: 'Dependiente/a de frutería',
            label: 'Dependiente/a de frutería',
        },
        {
            value: 'Dependiente/a de panadería, confitería y pastelería',
            label: 'Dependiente/a de panadería, confitería y pastelería',
        },
        {
            value: 'Dependiente/a de perfumería y droguería',
            label: 'Dependiente/a de perfumería y droguería',
        },
        {
            value: 'Dependiente/a de pescadería',
            label: 'Dependiente/a de pescadería',
        },
        {
            value: 'Dependiente/a de tejidos y prendas de vestir',
            label: 'Dependiente/a de tejidos y prendas de vestir',
        },
        {
            value: 'Dependiente/a de Grandes superficies',
            label: 'Dependiente/a de Grandes superficies',
        },
        {
            value: 'Dinamizador/a sociocultural',
            label: 'Dinamizador/a sociocultural',
        },
        { value: 'Diseñador web', label: 'Diseñador web' },
        { value: 'Educador/a social', label: 'Educador/a social' },
        {
            value: 'Electricista de mantenimiento y reparación electrodomésticos',
            label: 'Electricista de mantenimiento y reparación electrodomésticos',
        },
        {
            value: 'Electromecánica en general',
            label: 'Electromecánica en general',
        },
        {
            value: 'Empleado/a de contabilidad',
            label: 'Empleado/a de contabilidad',
        },
        { value: 'Empleado/a del hogar', label: 'Empleado/a del hogar' },
        {
            value: 'Encargado/a de industrias alimentarias',
            label: 'Encargado/a de industrias alimentarias',
        },
        {
            value: 'Encargados de fabricación de productos textiles',
            label: 'Encargados de fabricación de productos textiles',
        },
        { value: 'Encofradores', label: 'Encofradores' },
        {
            value: 'Especialista en tratamientos de estética, bienestar y afines',
            label: 'Especialista en tratamientos de estética, bienestar y afines',
        },
        { value: 'Estilista', label: 'Estilista' },
        {
            value: 'Expendedor/a de combustible',
            label: 'Expendedor/a de combustible',
        },
        { value: 'Ferrallistas', label: 'Ferrallistas' },
        {
            value: 'Fisioterapeúta en general',
            label: 'Fisioterapeúta en general',
        },
        { value: 'Fontanero/a', label: 'Fontanero/a' },
        { value: 'Fregantin/a', label: 'Fregantin/a' },
        { value: 'Futbolista', label: 'Futbolista' },
        { value: 'Gerocultor/a', label: 'Gerocultor/a' },
        { value: 'Guía de turismo', label: 'Guía de turismo' },
        {
            value: 'Instalador de telecomunicaciones',
            label: 'Instalador de telecomunicaciones',
        },
        {
            value: 'Instalador electricista en general',
            label: 'Instalador electricista en general',
        },
        {
            value: 'Instalador fontanero/electricista',
            label: 'Instalador fontanero/electricista',
        },
        { value: 'Interno/a', label: 'Interno/a' },
        { value: 'Jardinero/a en general', label: 'Jardinero/a en general' },
        { value: 'Jefe de obra', label: 'Jefe de obra' },
        {
            value: 'Limpiadores de vehículos',
            label: 'Limpiadores de vehículos',
        },
        { value: 'Logopeda', label: 'Logopeda' },
        {
            value: 'Maestro/a de educación especial',
            label: 'Maestro/a de educación especial',
        },
        {
            value: 'Maestro/a de educación infantil',
            label: 'Maestro/a de educación infantil',
        },
        {
            value: 'Maestro/a de educación primaria',
            label: 'Maestro/a de educación primaria',
        },
        {
            value: 'Manipulador/a de frutas y hortalizas',
            label: 'Manipulador/a de frutas y hortalizas',
        },
        { value: 'Masajista deportivo', label: 'Masajista deportivo' },
        {
            value: 'Mecánico y ajustadores de maquinaria agrícola e industrial',
            label: 'Mecánico y ajustadores de maquinaria agrícola e industrial',
        },
        { value: 'Mecánico/a de vehículos', label: 'Mecánico/a de vehículos' },
        {
            value: 'Monitor/a de aparatos de gimnasio',
            label: 'Monitor/a de aparatos de gimnasio',
        },
        {
            value: 'Monitor/a de comedor escolar',
            label: 'Monitor/a de comedor escolar',
        },
        {
            value: 'Monitor/a de educación y tiempo libre',
            label: 'Monitor/a de educación y tiempo libre',
        },
        {
            value: 'Monitor/a y/o animador/a deportivo',
            label: 'Monitor/a y/o animador/a deportivo',
        },
        { value: 'Montador/a de muebles', label: 'Montador/a de muebles' },
        {
            value: 'Montardor de placas de energía solar o renovables',
            label: 'Montardor de placas de energía solar o renovables',
        },
        { value: 'Mozo/a de almacén', label: 'Mozo/a de almacén' },
        {
            value: 'Operador/a de maquinaria de lavandería y tintorería',
            label: 'Operador/a de maquinaria de lavandería y tintorería',
        },
        { value: 'Operario/a de sondeos', label: 'Operario/a de sondeos' },
        {
            value: 'Orientador/a para la inserción',
            label: 'Orientador/a para la inserción',
        },
        {
            value: 'Panadero/a, pastelero/a, confitero/a',
            label: 'Panadero/a, pastelero/a, confitero/a',
        },
        { value: 'Pedagogo/a', label: 'Pedagogo/a' },
        { value: 'Peluquero/a Unisex', label: 'Peluquero/a Unisex' },
        { value: 'Peón agrícola', label: 'Peón agrícola' },
        {
            value: 'Peón de construcción de edificios',
            label: 'Peón de construcción de edificios',
        },
        { value: 'Peón de fábrica', label: 'Peón de fábrica' },
        {
            value: 'Peón en la industria textil',
            label: 'Peón en la industria textil',
        },
        {
            value: 'Personal de limpieza en general',
            label: 'Personal de limpieza en general',
        },
        { value: 'Pinche de cocina', label: 'Pinche de cocina' },
        { value: 'Podadores', label: 'Podadores' },
        {
            value: 'Profesionales de la acupuntura, naturopatía, medicina tradicional china',
            label: 'Profesionales de la acupuntura, naturopatía, medicina tradicional china',
        },
        {
            value: 'Profesor/a clases particulares',
            label: 'Profesor/a clases particulares',
        },
        { value: 'Psicólogo/a', label: 'Psicólogo/a' },
        { value: 'Recepcionista de hotel', label: 'Recepcionista de hotel' },
        { value: 'Recogedor de residuos', label: 'Recogedor de residuos' },
        { value: 'Repartidor/a', label: 'Repartidor/a' },
        { value: 'Reponedor/a', label: 'Reponedor/a' },
        { value: 'Sastre', label: 'Sastre' },
        { value: 'Secretario/a', label: 'Secretario/a' },
        { value: 'Socorrista', label: 'Socorrista' },
        {
            value: 'Soldador/a de estructuras metálicas ligeras',
            label: 'Soldador/a de estructuras metálicas ligeras',
        },
        {
            value: 'Soldador/a de estructuras metálicas pesadas',
            label: 'Soldador/a de estructuras metálicas pesadas',
        },
        { value: 'Soldadores/as', label: 'Soldadores/as' },
        {
            value: 'Técnico/a administrativo',
            label: 'Técnico/a administrativo',
        },
        {
            value: 'Técnico/a de educación infantil',
            label: 'Técnico/a de educación infantil',
        },
        {
            value: 'Técnico/a de información turística',
            label: 'Técnico/a de información turística',
        },
        {
            value: 'Técnico/a de laboratorio sanitario en general',
            label: 'Técnico/a de laboratorio sanitario en general',
        },
        {
            value: 'Técnico/a en integración social',
            label: 'Técnico/a en integración social',
        },
        {
            value: 'Téncico/a en control de calidad en industrias alimentarias',
            label: 'Téncico/a en control de calidad en industrias alimentarias',
        },
        { value: 'Tractoristas', label: 'Tractoristas' },
        { value: 'Trabajador/a social', label: 'Trabajador/a social' },
        { value: 'Vigilante de seguridad', label: 'Vigilante de seguridad' },
        { value: 'Webmaster', label: 'Webmaster' },
        { value: 'Otro', label: 'Otro' },
    ];

    const estudiosOptions = [
        { value: 'Sin estudios', label: 'Sin estudios' },
        { value: 'Educación Primaria', label: 'Educación Primaria' },
        {
            value: 'Formación Profesional Básica',
            label: 'Formación Profesional Básica',
        },
        {
            value: 'Educación Secundaria Obligatoria',
            label: 'Educación Secundaria Obligatoria',
        },
        { value: 'Bachillerato', label: 'Bachillerato' },
        {
            value: 'Formación Profesional de Grado Medio',
            label: 'Formación Profesional de Grado Medio',
        },
        {
            value: 'Formación Profesional de Grado Superior',
            label: 'Formación Profesional de Grado Superior',
        },
        { value: 'Grado universitario', label: 'Grado universitario' },
    ];

    const specialtyOptions = [
        {
            value: 'Sin especialidad',
            label: 'Sin especialidad',
        },
        // Grupo: FP Básica
        {
            label: '========================FP BÁSICA========================',
            options: [
                {
                    value: 'Acceso y Conservación en instalaciones deportivas',
                    label: 'Acceso y Conservación en instalaciones deportivas',
                },
                {
                    value: 'Actividades Agropecuarias',
                    label: 'Actividades Agropecuarias',
                },
                {
                    value: 'Actividades de panadería y pastelería',
                    label: 'Actividades de panadería y pastelería',
                },
                {
                    value: 'Actividades Domésticas y Limpieza de Edificios',
                    label: 'Actividades Domésticas y Limpieza de Edificios',
                },
                {
                    value: 'Actividades Marítimo-Pesqueras',
                    label: 'Actividades Marítimo-Pesqueras',
                },
                {
                    value: 'Agro-jardinería y composiciones florales',
                    label: 'Agro-jardinería y composiciones florales',
                },
                {
                    value: 'Alojamiento y lavandería',
                    label: 'Alojamiento y lavandería',
                },
                {
                    value: 'Aprovechamientos Florales',
                    label: 'Aprovechamientos Florales',
                },
                {
                    value: 'Arreglo y Reparación de Artículos Textiles y de Piel',
                    label: 'Arreglo y Reparación de Artículos Textiles y de Piel',
                },
                { value: 'Artes gráficas', label: 'Artes gráficas' },
                {
                    value: 'Carpintería y Mueble',
                    label: 'Carpintería y Mueble',
                },
                {
                    value: 'Cocina y restauración',
                    label: 'Cocina y restauración',
                },
                {
                    value: 'Electricidad y electrónica',
                    label: 'Electricidad y electrónica',
                },
                {
                    value: 'Fabricación de elementos metálicos',
                    label: 'Fabricación de elementos metálicos',
                },
                {
                    value: 'Fabricación y montaje',
                    label: 'Fabricación y montaje',
                },
                {
                    value: 'Industrias Alimentarias',
                    label: 'Industrias Alimentarias',
                },
                {
                    value: 'Informática de Oficina',
                    label: 'Informática de Oficina',
                },
                {
                    value: 'Informática y comunicaciones',
                    label: 'Informática y comunicaciones',
                },
                {
                    value: 'Instalaciones electrotécnicas y mecánicas',
                    label: 'Instalaciones electrotécnicas y mecánica',
                },
                {
                    value: 'Mantenimiento de Vehículos',
                    label: 'Mantenimiento de Vehículos',
                },
                {
                    value: 'Mantenimiento de Viviendas',
                    label: 'Mantenimiento de Viviendas',
                },
                {
                    value: 'Peluquería y estética',
                    label: 'Peluquería y estética',
                },
                {
                    value: 'Reforma y mantenimiento de edificios',
                    label: 'Reforma y mantenimiento de edificios',
                },
                {
                    value: 'Servicios Administrativos',
                    label: 'Servicios Administrativos',
                },
                {
                    value: 'Servicios Comerciales',
                    label: 'Servicios Comerciales',
                },
                {
                    value: 'Tapicería y Cortinaje',
                    label: 'Tapicería y Cortinaje',
                },
                {
                    value: 'Vidriería y Alfarería',
                    label: 'Vidriería y Alfarería',
                },
            ],
        },

        // Grupo: FP Medio
        {
            label: '========================FP MEDIO========================',
            options: [
                {
                    value: 'Aceites de Oliva y Vinos',
                    label: 'Aceites de Oliva y Vinos',
                },
                {
                    value: 'Actividades Comerciales',
                    label: 'Actividades Comerciales',
                },
                {
                    value: 'Actividades Ecuestres',
                    label: 'Actividades Ecuestres',
                },
                {
                    value: 'Atención a Personas en Situación de Dependencia',
                    label: 'Atención a Personas en Situación de Dependencia',
                },
                {
                    value: 'Aprovechamiento y Conservación del Medio Natural',
                    label: 'Aprovechamiento y Conservación del Medio Natural',
                },
                {
                    value: 'Calzado y Complementos de Moda',
                    label: 'Calzado y Complementos de Moda',
                },
                {
                    value: 'Carpintería y Mueble',
                    label: 'Carpintería y Mueble',
                },
                { value: 'Carrocería', label: 'Carrocería' },
                {
                    value: 'Cocina y Gastronomía',
                    label: 'Cocina y Gastronomía',
                },
                {
                    value: 'Comercialización de productos alimentarios',
                    label: 'Comercialización de productos alimentarios',
                },
                {
                    value: 'Confección y Moda',
                    label: 'Confección y Moda',
                },
                {
                    value: 'Conformado por Moldeo de Metales y Polímeros',
                    label: 'Conformado por Moldeo de Metales y Polímeros',
                },
                { value: 'Construcción', label: 'Construcción' },
                {
                    value: 'Cuidados auxiliares de enfermería',
                    label: 'Cuidados auxiliares de enfermería',
                },
                {
                    value: 'Cultivos Acuícolas',
                    label: 'Cultivos Acuícolas',
                },
                {
                    value: 'Elaboración de Productos Alimenticios',
                    label: 'Elaboración de Productos Alimenticios',
                },
                {
                    value: 'Electromecánica de Maquinaria',
                    label: 'Electromecánica de Maquinaria',
                },
                {
                    value: 'Electromecánica de Vehículos Automóviles',
                    label: 'Electromecánica de Vehículos Automóviles',
                },
                {
                    value: 'Emergencias y Protección Civil',
                    label: 'Emergencias y Protección Civil',
                },
                {
                    value: 'Emergencias Sanitarias',
                    label: 'Emergencias Sanitarias',
                },
                {
                    value: 'Estética y Belleza',
                    label: 'Estética y Belleza',
                },
                {
                    value: 'Excavaciones y Sondeos',
                    label: 'Excavaciones y Sondeos',
                },
                {
                    value: 'Farmacia y Parafarmacia',
                    label: 'Farmacia y Parafarmacia',
                },
                {
                    value: 'Gestión Administrativa',
                    label: 'Gestión Administrativa',
                },
                {
                    value: 'Guía en el medio natural y de tiempo libre',
                    label: 'Guía en el medio natural y de tiempo libre',
                },
                {
                    value: 'Impresión Gráfica',
                    label: 'Impresión Gráfica',
                },
                {
                    value: 'Instalación y Amueblamiento',
                    label: 'Instalación y Amueblamiento',
                },
                {
                    value: 'Instalaciones de Producción de Calor',
                    label: 'Instalaciones de Producción de Calor',
                },
                {
                    value: 'Instalaciones de Telecomunicaciones',
                    label: 'Instalaciones de Telecomunicaciones',
                },
                {
                    value: 'Instalaciones Eléctricas y Automáticas',
                    label: 'Instalaciones Eléctricas y Automáticas',
                },
                {
                    value: 'Instalaciones Frigoríficas y de Climatización',
                    label: 'Instalaciones Frigoríficas y de Climatización',
                },
                {
                    value: 'Jardinería y Floristería',
                    label: 'Jardinería y Floristería',
                },
                {
                    value: 'Mantenimiento Electromecánico',
                    label: 'Mantenimiento Electromecánico',
                },
                {
                    value: 'Mantenimiento de Material Rodante Ferroviario',
                    label: 'Mantenimiento de Material Rodante Ferroviario',
                },
                {
                    value: 'Mantenimiento y Control de la Maquinaria de Buques y Embarcaciones',
                    label: 'Mantenimiento y Control de la Maquinaria de Buques y Embarcaciones',
                },
                { value: 'Mecanizado', label: 'Mecanizado' },
                {
                    value: 'Montaje de Estructuras e Instalación de Sistemas Aeronáuticos',
                    label: 'Montaje de Estructuras e Instalación de Sistemas Aeronáuticos',
                },
                {
                    value: 'Navegación y Pesca de Litoral',
                    label: 'Navegación y Pesca de Litoral',
                },
                {
                    value: 'Obras de Interior, Decoración y Rehabilitación',
                    label: 'Obras de Interior, Decoración y Rehabilitación',
                },
                {
                    value: 'Operaciones de Laboratorio',
                    label: 'Operaciones de Laboratorio',
                },
                {
                    value: 'Operaciones Subacuáticas e Hiperbáricas',
                    label: 'Operaciones Subacuáticas e Hiperbáricas',
                },
                {
                    value: 'Panadería, Repostería y Confitería',
                    label: 'Panadería, Repostería y Confitería',
                },
                {
                    value: 'Peluquería y Cosmética Capilar',
                    label: 'Peluquería y Cosmética Capilar',
                },
                { value: 'Piedra Natural', label: 'Piedra Natural' },
                { value: 'Planta Química', label: 'Planta Química' },
                {
                    value: 'Preimpresión Digital',
                    label: 'Preimpresión Digital',
                },
                {
                    value: 'Producción Agroecológica',
                    label: 'Producción Agroecológica',
                },
                {
                    value: 'Producción Agropecuaria',
                    label: 'Producción Agropecuaria',
                },
                {
                    value: 'Redes y Estaciones de Tratamiento de Aguas',
                    label: 'Redes y Estaciones de Tratamiento de Aguas',
                },
                {
                    value: 'Servicios en Restauración',
                    label: 'Servicios en Restauración',
                },
                {
                    value: 'Sistemas Microinformáticos y Redes',
                    label: 'Sistemas Microinformáticos y Redes',
                },
                {
                    value: 'Soldadura y Calderería',
                    label: 'Soldadura y Calderería',
                },
                {
                    value: 'Vídeo Disc-jockey y Sonido',
                    label: 'Vídeo Disc-jockey y Sonido',
                },
            ],
        },

        // Grupo: FP Superior
        {
            label: '========================FP SUPERIOR========================',
            options: [
                {
                    value: 'Acondicionamiento Físico',
                    label: 'Acondicionamiento Físico',
                },
                {
                    value: 'Administracion de Sistemas Informáticos en Red',
                    label: 'Administracion de Sistemas Informáticos en Red',
                },
                {
                    value: 'Administración y Finanzas',
                    label: 'Administración y Finanzas',
                },
                {
                    value: 'Agencias de Viajes y Gestión de Eventos',
                    label: 'Agencias de Viajes y Gestión de Eventos',
                },
                {
                    value: 'Anatomía Patológica y Citodiagnóstico',
                    label: 'Anatomía Patológica y Citodiagnóstico',
                },
                {
                    value: 'Animaciones 3D, Juegos y Entornos Interactivos',
                    label: 'Animaciones 3D, Juegos y Entornos Interactivos',
                },
                {
                    value: 'Animación Sociocultural y Turística',
                    label: 'Animación Sociocultural y Turística',
                },
                {
                    value: 'Asesoría de Imagen Personal y Corporativa',
                    label: 'Asesoría de Imagen Personal y Corporativa',
                },
                {
                    value: 'Asistencia a la Dirección',
                    label: 'Asistencia a la Dirección',
                },
                {
                    value: 'Audiología Protésica',
                    label: 'Audiología Protésica',
                },
                {
                    value: 'Automatización y Robótica Industrial',
                    label: 'Automatización y Robótica Industrial',
                },
                {
                    value: 'Automoción',
                    label: 'Automoción',
                },
                {
                    value: 'Caracterización y Maquillaje Profesional',
                    label: 'Caracterización y Maquillaje Profesional',
                },
                {
                    value: 'Comercio Internacional',
                    label: 'Comercio Internacional',
                },
                {
                    value: 'Construcciones Metálicas',
                    label: 'Construcciones Metálicas',
                },
                {
                    value: 'Coordinación de Emergencias y Protección Civil',
                    label: 'Coordinación de Emergencias y Protección Civil',
                },
                {
                    value: 'Desarrollo de Aplicaciones Multiplataforma',
                    label: 'Desarrollo de Aplicaciones Multiplataforma',
                },
                {
                    value: 'Desarrollo de Aplicaciones Web',
                    label: 'Desarrollo de Aplicaciones Web',
                },
                {
                    value: 'Desarrollo de Proyectos de Instalaciones Térmicas y de Fluidos',
                    label: 'Desarrollo de Proyectos de Instalaciones Térmicas y de Fluidos',
                },
                {
                    value: 'Dietética',
                    label: 'Dietética',
                },
                {
                    value: 'Dirección de Cocina',
                    label: 'Dirección de Cocina',
                },
                {
                    value: 'Dirección de Servicios en Restauración',
                    label: 'Dirección de Servicios en Restauración',
                },
                {
                    value: 'Diseño en Fabricación Mecánica',
                    label: 'Diseño en Fabricación Mecánica',
                },
                {
                    value: 'Diseño y Amueblamiento',
                    label: 'Diseño y Amueblamiento',
                },
                {
                    value: 'Diseño y Edición de Publicaciones Impresas y Multimedia',
                    label: 'Diseño y Edición de Publicaciones Impresas y Multimedia',
                },
                {
                    value: 'Diseño y Gestión de la Producción Gráfica',
                    label: 'Diseño y Gestión de la Producción Gráfica',
                },
                {
                    value: 'Documentación y Administración Sanitarias',
                    label: 'Documentación y Administración Sanitarias',
                },
                {
                    value: 'Educación Infantil',
                    label: 'Educación Infantil',
                },
                {
                    value: 'Educación y Control Ambiental',
                    label: 'Educación y Control Ambiental',
                },
                {
                    value: 'Eficiencia Energética y Energía Solar Térmica',
                    label: 'Eficiencia Energética y Energía Solar Térmica',
                },
                {
                    value: 'Electromedicina Clínica',
                    label: 'Electromedicina Clínica',
                },
                {
                    value: 'Energías Renovables',
                    label: 'Energías Renovables',
                },
                {
                    value: 'Enseñanza y Animación Sociodeportiva',
                    label: 'Enseñanza y Animación Sociodeportiva',
                },
                {
                    value: 'Estética Integral y Bienestar',
                    label: 'Estética Integral y Bienestar',
                },
                {
                    value: 'Estilismo y Dirección de Peluquería',
                    label: 'Estilismo y Dirección de Peluquería',
                },
                {
                    value: 'Fabricación de productos farmacéuticos, biotecnológicos y afines',
                    label: 'Fabricación de productos farmacéuticos, biotecnológicos y afines',
                },
                {
                    value: 'Formación para la Movilidad Segura y Sostenible.',
                    label: 'Formación para la Movilidad Segura y Sostenible.',
                },
                {
                    value: 'Ganadería y Asistencia en Sanidad Animal',
                    label: 'Ganadería y Asistencia en Sanidad Animal',
                },
                {
                    value: 'Gestión de Alojamientos Turísticos',
                    label: 'Gestión de Alojamientos Turísticos',
                },
                {
                    value: 'Gestión de Ventas y Espacios Comerciales',
                    label: 'Gestión de Ventas y Espacios Comerciales',
                },
                {
                    value: 'Gestión del Agua',
                    label: 'Gestión del Agua',
                },
                {
                    value: 'Gestión Forestal y del Medio Natural',
                    label: 'Gestión Forestal y del Medio Natural',
                },
                {
                    value: 'Guía, Información y Asistencias Turísticas',
                    label: 'Guía, Información y Asistencias Turísticas',
                },
                {
                    value: 'Higiene Bucodental',
                    label: 'Higiene Bucodental',
                },
                {
                    value: 'Iluminación, Captación y Tratamiento de Imagen',
                    label: 'Iluminación, Captación y Tratamiento de Imagen',
                },
                {
                    value: 'Imagen para el Diagnóstico y Medicina Nuclear',
                    label: 'Imagen para el Diagnóstico y Medicina Nuclear',
                },
                {
                    value: 'Integración Social',
                    label: 'Integración Social',
                },
                {
                    value: 'Laboratorio Clínico y Biomédico',
                    label: 'Laboratorio Clínico y Biomédico',
                },
                {
                    value: 'Laboratorio de Análisis y de Control de Calidad',
                    label: 'Laboratorio de Análisis y de Control de Calidad',
                },
                {
                    value: 'Mantenimiento aeromecánico de aviones con motor de turbina',
                    label: 'Mantenimiento aeromecánico de aviones con motor de turbina',
                },
                {
                    value: 'Mantenimiento aeromecánico de helicópteros con motor de turbina',
                    label: 'Mantenimiento aeromecánico de helicópteros con motor de turbina',
                },
                {
                    value: 'Mantenimiento de Instalaciones Térmicas y de Fluidos',
                    label: 'Mantenimiento de Instalaciones Térmicas y de Fluidos',
                },
                {
                    value: 'Mantenimiento Electrónico',
                    label: 'Mantenimiento Electrónico',
                },
                {
                    value: 'Marketing y Publicidad',
                    label: 'Marketing y Publicidad',
                },
                {
                    value: 'Mecatrónica Industrial',
                    label: 'Mecatrónica Industrial',
                },
                {
                    value: 'Mediación Comunicativa',
                    label: 'Mediación Comunicativa',
                },
                {
                    value: 'Óptica de anteojería',
                    label: 'Óptica de anteojería',
                },
                {
                    value: 'Organización del Mantenimiento de Maquinaria de Buques y Embarcaciones',
                    label: 'Organización del Mantenimiento de Maquinaria de Buques y Embarcaciones',
                },
                {
                    value: 'Organización y Control de Obras de Construcción',
                    label: 'Organización y Control de Obras de Construcción',
                },
                {
                    value: 'Ortoprótesis y Productos de Apoyo',
                    label: 'Ortoprótesis y Productos de Apoyo',
                },
                {
                    value: 'Paisajismo y Medio Rural',
                    label: 'Paisajismo y Medio Rural',
                },
                {
                    value: 'Patronaje y Moda',
                    label: 'Patronaje y Moda',
                },
                {
                    value: 'Prevención de riesgos profesionales',
                    label: 'Prevención de riesgos profesionales',
                },
                {
                    value: 'Procesos y Calidad en la Industria Alimentaria',
                    label: 'Procesos y Calidad en la Industria Alimentaria',
                },
                {
                    value: 'Producción de Audiovisuales y Espectáculos',
                    label: 'Producción de Audiovisuales y Espectáculos',
                },
                {
                    value: 'Programación de la Producción en Fabricación Mecánica',
                    label: 'Programación de la Producción en Fabricación Mecánica',
                },
                {
                    value: 'Programación de la Producción en Moldeo de Metales y Polímeros',
                    label: 'Programación de la Producción en Moldeo de Metales y Polímeros',
                },
                {
                    value: 'Promoción de Igualdad de Género',
                    label: 'Promoción de Igualdad de Género',
                },
                {
                    value: 'Prótesis Dentales',
                    label: 'Prótesis Dentales',
                },
                {
                    value: 'Proyectos de Edificación',
                    label: 'Proyectos de Edificación',
                },
                {
                    value: 'Proyectos de Obra Civil',
                    label: 'Proyectos de Obra Civil',
                },
                {
                    value: 'Química Industrial',
                    label: 'Química Industrial',
                },
                {
                    value: 'Química y Salud Ambiental',
                    label: 'Química y Salud Ambiental',
                },
                {
                    value: 'Radioterapia y Dosimetría',
                    label: 'Radioterapia y Dosimetría',
                },
                {
                    value: 'Realización de Proyectos Audiovisuales y Espectáculos',
                    label: 'Realización de Proyectos Audiovisuales y Espectáculos',
                },
                {
                    value: 'Sistemas de Telecomunicaciones e Informáticos',
                    label: 'Sistemas de Telecomunicaciones e Informáticos',
                },
                {
                    value: 'Sistemas Electrotécnicos y Automatizados',
                    label: 'Sistemas Electrotécnicos y Automatizados',
                },
                {
                    value: 'Sonido para Audiovisuales y Espectáculos',
                    label: 'Sonido para Audiovisuales y Espectáculos',
                },
                {
                    value: 'Termalismo y Bienestar',
                    label: 'Termalismo y Bienestar',
                },
                {
                    value: 'Transporte Marítimo y Pesca de Altura',
                    label: 'Transporte Marítimo y Pesca de Altura',
                },
                {
                    value: 'Transporte y Logística',
                    label: 'Transporte y Logística',
                },
                {
                    value: 'Vestuario a Medida y de Espectáculos',
                    label: 'Vestuario a Medida y de Espectáculos',
                },
                {
                    value: 'Vitivinicultura',
                    label: 'Vitivinicultura',
                },
            ],
        },
        {
            label: '=======(Gdo./Gda) Grado en carrera universitaria=======',
            options: [
                {
                    value: 'Selecciona el grado deseado',
                    label: 'Selecciona el grado deseado',
                    isDisabled: true,
                },
            ],
        },

        // Grupo: Grados Artes y Humanidades
        {
            label: 'Grados : Artes y Humanidades',
            options: [
                { value: 'Grado Abierto', label: 'Grado Abierto' },
                {
                    value: 'Grado Abierto en Ciencias Sociales y Humanidades',
                    label: 'Grado Abierto en Ciencias Sociales y Humanidades',
                },
                { value: 'Animación', label: 'Animación' },
                { value: 'Animación & VFX', label: 'Animación & VFX' },
                { value: 'Animación Digital', label: 'Animación Digital' },
                { value: 'Antropología', label: 'Antropología' },
                { value: 'Antropología Social', label: 'Antropología Social' },
                {
                    value: 'Antropología Social y Cultural',
                    label: 'Antropología Social y Cultural',
                },
                {
                    value: 'Antropología y Evolución Humana',
                    label: 'Antropología y Evolución Humana',
                },
                { value: 'Arqueología', label: 'Arqueología' },
                { value: 'Arte', label: 'Arte' },
                {
                    value: 'Arte para Videojuegos',
                    label: 'Arte para Videojuegos',
                },
                { value: 'Artes', label: 'Artes' },
                { value: 'Artes Escénicas', label: 'Artes Escénicas' },
                {
                    value: 'Artes Escénicas e Interpretación',
                    label: 'Artes Escénicas e Interpretación',
                },
                {
                    value: 'Artes Escénicas y Cinematográficas',
                    label: 'Artes Escénicas y Cinematográficas',
                },
                {
                    value: 'Artes Visuales y Danza',
                    label: 'Artes Visuales y Danza',
                },
                { value: 'Artes y Diseño', label: 'Artes y Diseño' },
                { value: 'Bellas Artes', label: 'Bellas Artes' },
                {
                    value: 'Ciencia y Tecnología Geográficas',
                    label: 'Ciencia y Tecnología Geográficas',
                },
                {
                    value: 'Ciencia, Tecnología y Humanidades',
                    label: 'Ciencia, Tecnología y Humanidades',
                },
                {
                    value: 'Ciencias de la Antigüedad',
                    label: 'Ciencias de la Antigüedad',
                },
                {
                    value: 'Ciencias de las Religiones',
                    label: 'Ciencias de las Religiones',
                },
                { value: 'Cine', label: 'Cine' },
                { value: 'Cine y Cultura', label: 'Cine y Cultura' },
                {
                    value: 'Cine y Ficción Audiovisual',
                    label: 'Cine y Ficción Audiovisual',
                },
                { value: 'Cinematografía', label: 'Cinematografía' },
                { value: 'Composición Musical', label: 'Composición Musical' },
                {
                    value: 'Composición, Postproducción y Efectos Visuales',
                    label: 'Composición, Postproducción y Efectos Visuales',
                },
                {
                    value: 'Comunicación Cultural',
                    label: 'Comunicación Cultural',
                },
                {
                    value: 'Comunicación e Industrias Culturales',
                    label: 'Comunicación e Industrias Culturales',
                },
                {
                    value: 'Conservación y Restauración de Bienes Culturales',
                    label: 'Conservación y Restauración de Bienes Culturales',
                },
                {
                    value: 'Conservación y Restauración del Patrimonio Cultural',
                    label: 'Conservación y Restauración del Patrimonio Cultural',
                },
                {
                    value: 'Creación de Videojuegos y Animación Digital',
                    label: 'Creación de Videojuegos y Animación Digital',
                },
                { value: 'Creación y Diseño', label: 'Creación y Diseño' },
                { value: 'Danza', label: 'Danza' },
                { value: 'Diseño', label: 'Diseño' },
                {
                    value: 'Diseño Arquitectónico de Interiores',
                    label: 'Diseño Arquitectónico de Interiores',
                },
                {
                    value: 'Diseño Audiovisual e Ilustración',
                    label: 'Diseño Audiovisual e Ilustración',
                },
                {
                    value: 'Diseño de Interiores',
                    label: 'Diseño de Interiores',
                },
                { value: 'Diseño de Moda', label: 'Diseño de Moda' },
                { value: 'Diseño Digital', label: 'Diseño Digital' },
                {
                    value: 'Diseño Digital y Multimedia',
                    label: 'Diseño Digital y Multimedia',
                },
                {
                    value: 'Diseño Digital y Tecnologías Creativas',
                    label: 'Diseño Digital y Tecnologías Creativas',
                },
                { value: 'Diseño e Innovación', label: 'Diseño e Innovación' },
                {
                    value: 'Diseño Gráfico y Motion Graphics',
                    label: 'Diseño Gráfico y Motion Graphics',
                },
                {
                    value: 'Diseño Gráfico y Multimedia',
                    label: 'Diseño Gráfico y Multimedia',
                },
                {
                    value: 'Diseño Gráfico y Tecnologías Creativas',
                    label: 'Diseño Gráfico y Tecnologías Creativas',
                },
                {
                    value: 'Diseño Integral y Gestión de la Imagen',
                    label: 'Diseño Integral y Gestión de la Imagen',
                },
                {
                    value: 'Diseño Multimedia y Gráfico',
                    label: 'Diseño Multimedia y Gráfico',
                },
                {
                    value: 'Diseño y Arte Digital para Videojuegos',
                    label: 'Diseño y Arte Digital para Videojuegos',
                },
                {
                    value: 'Diseño y Creación Digital',
                    label: 'Diseño y Creación Digital',
                },
                {
                    value: 'Diseño y Gestión de Moda',
                    label: 'Diseño y Gestión de Moda',
                },
                {
                    value: 'Diseño y Gestión de Procesos Transmedia',
                    label: 'Diseño y Gestión de Procesos Transmedia',
                },
                {
                    value: 'Diseño y Narración de Animación y Videojuegos',
                    label: 'Diseño y Narración de Animación y Videojuegos',
                },
                {
                    value: 'Diseño y Tecnologías Creativas',
                    label: 'Diseño y Tecnologías Creativas',
                },
                {
                    value: 'Diseño, Animación y Arte Digital',
                    label: 'Diseño, Animación y Arte Digital',
                },
                {
                    value: 'Diseño, Animación y Arte Digital para Videojuegos y Juegos Aplicados',
                    label: 'Diseño, Animación y Arte Digital para Videojuegos y Juegos Aplicados',
                },
                {
                    value: 'Español, Lengua y Literatura',
                    label: 'Español, Lengua y Literatura',
                },
                { value: 'Estudios Alemanes', label: 'Estudios Alemanes' },
                {
                    value: 'Estudios Árabes e Islámicos',
                    label: 'Estudios Árabes e Islámicos',
                },
                {
                    value: 'Estudios Árabes y Hebreos',
                    label: 'Estudios Árabes y Hebreos',
                },
                { value: 'Estudios Clásicos', label: 'Estudios Clásicos' },
                {
                    value: 'Estudios Clásicos y de la Antigüedad',
                    label: 'Estudios Clásicos y de la Antigüedad',
                },
                {
                    value: 'Estudios Clásicos y Románicos',
                    label: 'Estudios Clásicos y Románicos',
                },
                { value: 'Estudios Culturales', label: 'Estudios Culturales' },
                {
                    value: 'Estudios de Asia Oriental',
                    label: 'Estudios de Asia Oriental',
                },
                {
                    value: 'Estudios de Asia Oriental Chino',
                    label: 'Estudios de Asia Oriental Chino',
                },
                {
                    value: 'Estudios de Asia Oriental Coreano',
                    label: 'Estudios de Asia Oriental Coreano',
                },
                {
                    value: 'Estudios de Asia Oriental Japonés',
                    label: 'Estudios de Asia Oriental Japonés',
                },
                {
                    value: 'Estudios de Asia Oriental: Chino',
                    label: 'Estudios de Asia Oriental: Chino',
                },
                {
                    value: 'Estudios de Asia Oriental-Japonés',
                    label: 'Estudios de Asia Oriental-Japonés',
                },
                {
                    value: 'Estudios de Asia y África: Árabe',
                    label: 'Estudios de Asia y África: Árabe',
                },
                {
                    value: 'Estudios de Asia y África: Chino',
                    label: 'Estudios de Asia y África: Chino',
                },
                {
                    value: 'Estudios de Asia y África: Japonés',
                    label: 'Estudios de Asia y África: Japonés',
                },
                {
                    value: 'Estudios de Catalán y Español',
                    label: 'Estudios de Catalán y Español',
                },
                {
                    value: 'Estudios de Español y Chino: Lengua, Literatura y Cultura',
                    label: 'Estudios de Español y Chino: Lengua, Literatura y Cultura',
                },
                {
                    value: 'Estudios de Inglés y Catalán',
                    label: 'Estudios de Inglés y Catalán',
                },
                {
                    value: 'Estudios de Inglés y de Clásicas',
                    label: 'Estudios de Inglés y de Clásicas',
                },
                {
                    value: 'Estudios de Inglés y Español',
                    label: 'Estudios de Inglés y Español',
                },
                {
                    value: 'Estudios de Inglés y Francés',
                    label: 'Estudios de Inglés y Francés',
                },
                { value: 'Estudios Franceses', label: 'Estudios Franceses' },
                {
                    value: 'Estudios Francófonos Aplicados',
                    label: 'Estudios Francófonos Aplicados',
                },
                {
                    value: 'Estudios Hebreos y Arameos',
                    label: 'Estudios Hebreos y Arameos',
                },
                { value: 'Estudios Hispánicos', label: 'Estudios Hispánicos' },
                {
                    value: 'Estudios Hispánicos: Lengua Española y sus Literaturas',
                    label: 'Estudios Hispánicos: Lengua Española y sus Literaturas',
                },
                {
                    value: 'Estudios Hispano-Alemanes',
                    label: 'Estudios Hispano-Alemanes',
                },
                { value: 'Estudios Ingleses', label: 'Estudios Ingleses' },
                {
                    value: 'Estudios Ingleses: Lengua, Literatura y Cultura',
                    label: 'Estudios Ingleses: Lengua, Literatura y Cultura',
                },
                { value: 'Estudios Italianos', label: 'Estudios Italianos' },
                { value: 'Estudios Literarios', label: 'Estudios Literarios' },
                {
                    value: 'Estudios Portugueses y Brasileños',
                    label: 'Estudios Portugueses y Brasileños',
                },
                {
                    value: 'Estudios Semíticos e Islámicos',
                    label: 'Estudios Semíticos e Islámicos',
                },
                {
                    value: 'Estudios Socioculturales de Género',
                    label: 'Estudios Socioculturales de Género',
                },
                {
                    value: 'Estudios Transculturales Europeos: Lenguas, Culturas, Interacciones',
                    label: 'Estudios Transculturales Europeos: Lenguas, Culturas, Interacciones',
                },
                { value: 'Estudios Vascos', label: 'Estudios Vascos' },
                { value: 'Filología', label: 'Filología' },
                {
                    value: 'Filología Aplicada en Gallego y Español',
                    label: 'Filología Aplicada en Gallego y Español',
                },
                { value: 'Filología Catalana', label: 'Filología Catalana' },
                {
                    value: 'Filología Catalana y Estudios Occitanos',
                    label: 'Filología Catalana y Estudios Occitanos',
                },
                {
                    value: 'Filología Catalana: Estudios de Literatura i Lingüística',
                    label: 'Filología Catalana: Estudios de Literatura i Lingüística',
                },
                { value: 'Filología Clásica', label: 'Filología Clásica' },
                { value: 'Filología Hispánica', label: 'Filología Hispánica' },
                {
                    value: 'Filología Moderna, Inglés',
                    label: 'Filología Moderna, Inglés',
                },
                {
                    value: 'Filología Moderna: Inglés',
                    label: 'Filología Moderna: Inglés',
                },
                { value: 'Filosofía', label: 'Filosofía' },
                {
                    value: 'Filosofía, Política y Economía',
                    label: 'Filosofía, Política y Economía',
                },
                {
                    value: 'Filosofía, Política, Derecho y Economía',
                    label: 'Filosofía, Política, Derecho y Economía',
                },
                { value: 'Fotografía', label: 'Fotografía' },
                {
                    value: 'Fotografía y Creación Audiovisual',
                    label: 'Fotografía y Creación Audiovisual',
                },
                {
                    value: 'Gallego y Portugués: Estudios Lingüísticos y Literarios',
                    label: 'Gallego y Portugués: Estudios Lingüísticos y Literarios',
                },
                { value: 'Gestión Cultural', label: 'Gestión Cultural' },
                { value: 'Historia', label: 'Historia' },
                { value: 'Historia del Arte', label: 'Historia del Arte' },
                {
                    value: 'Historia del Arte y Arqueología',
                    label: 'Historia del Arte y Arqueología',
                },
                {
                    value: 'Historia del Arte y Gestión del Patrimonio Artístico',
                    label: 'Historia del Arte y Gestión del Patrimonio Artístico',
                },
                {
                    value: 'Historia del Arte y Patrimonio Histórico-Artístico',
                    label: 'Historia del Arte y Patrimonio Histórico-Artístico',
                },
                {
                    value: 'Historia y Ciencias de la Música',
                    label: 'Historia y Ciencias de la Música',
                },
                {
                    value: 'Historia y Ciencias de la Música y Tecnología Musical',
                    label: 'Historia y Ciencias de la Música y Tecnología Musical',
                },
                {
                    value: 'Historia y Patrimonio',
                    label: 'Historia y Patrimonio',
                },
                {
                    value: 'Historia y Patrimonio Histórico',
                    label: 'Historia y Patrimonio Histórico',
                },
                {
                    value: 'Historia, Geografía e Historia del Arte',
                    label: 'Historia, Geografía e Historia del Arte',
                },
                { value: 'Humanidades', label: 'Humanidades' },
                {
                    value: 'Humanidades y Estudios Culturales',
                    label: 'Humanidades y Estudios Culturales',
                },
                {
                    value: 'Humanidades y Estudios Sociales',
                    label: 'Humanidades y Estudios Sociales',
                },
                {
                    value: 'Humanidades y Patrimonio',
                    label: 'Humanidades y Patrimonio',
                },
                {
                    value: 'Humanidades: Estudios Interculturales',
                    label: 'Humanidades: Estudios Interculturales',
                },
                {
                    value: 'Humanidades: Historia Cultural',
                    label: 'Humanidades: Historia Cultural',
                },
                {
                    value: 'Información y Documentación',
                    label: 'Información y Documentación',
                },
                { value: 'Inglés', label: 'Inglés' },
                {
                    value: 'Inglés: Estudios Lingüísticos y Literarios',
                    label: 'Inglés: Estudios Lingüísticos y Literarios',
                },
                {
                    value: 'Interpretación de Música Moderna',
                    label: 'Interpretación de Música Moderna',
                },
                {
                    value: 'Interpretación Musical',
                    label: 'Interpretación Musical',
                },
                {
                    value: 'Lengua Española y Literaturas Hispánicas',
                    label: 'Lengua Española y Literaturas Hispánicas',
                },
                {
                    value: 'Lengua Española y su Literatura',
                    label: 'Lengua Española y su Literatura',
                },
                {
                    value: 'Lengua Española y sus Literaturas',
                    label: 'Lengua Española y sus Literaturas',
                },
                {
                    value: 'Lengua y Cultura Vasca',
                    label: 'Lengua y Cultura Vasca',
                },
                { value: 'Lengua y Literatura', label: 'Lengua y Literatura' },
                {
                    value: 'Lengua y Literatura Alemanas',
                    label: 'Lengua y Literatura Alemanas',
                },
                {
                    value: 'Lengua y Literatura Catalanas',
                    label: 'Lengua y Literatura Catalanas',
                },
                {
                    value: 'Lengua y Literatura Española',
                    label: 'Lengua y Literatura Española',
                },
                {
                    value: 'Lengua y Literatura Españolas',
                    label: 'Lengua y Literatura Españolas',
                },
                {
                    value: 'Lengua y Literatura Gallegas',
                    label: 'Lengua y Literatura Gallegas',
                },
                {
                    value: 'Lengua y Literatura Hispánica',
                    label: 'Lengua y Literatura Hispánica',
                },
                {
                    value: 'Lengua y Literatura Hispánicas',
                    label: 'Lengua y Literatura Hispánicas',
                },
                {
                    value: 'Lengua y Literaturas Españolas',
                    label: 'Lengua y Literaturas Españolas',
                },
                {
                    value: 'Lengua y Literaturas Inglesas',
                    label: 'Lengua y Literaturas Inglesas',
                },
                { value: 'Lenguas Aplicadas', label: 'Lenguas Aplicadas' },
                { value: 'Lenguas Extranjeras', label: 'Lenguas Extranjeras' },
                { value: 'Lenguas Modernas', label: 'Lenguas Modernas' },
                {
                    value: 'Lenguas Modernas Aplicadas',
                    label: 'Lenguas Modernas Aplicadas',
                },
                {
                    value: 'Lenguas Modernas y Gestión',
                    label: 'Lenguas Modernas y Gestión',
                },
                {
                    value: 'Lenguas Modernas y sus Literaturas',
                    label: 'Lenguas Modernas y sus Literaturas',
                },
                {
                    value: 'Lenguas Modernas y Traducción',
                    label: 'Lenguas Modernas y Traducción',
                },
                {
                    value: 'Lenguas Modernas, Cultura y Comunicación: Español',
                    label: 'Lenguas Modernas, Cultura y Comunicación: Español',
                },
                {
                    value: 'Lenguas Modernas, Cultura y Comunicación: Francés',
                    label: 'Lenguas Modernas, Cultura y Comunicación: Francés',
                },
                {
                    value: 'Lenguas Modernas, Cultura y Comunicación: Inglés',
                    label: 'Lenguas Modernas, Cultura y Comunicación: Inglés',
                },
                {
                    value: 'Lenguas Románicas y sus Literaturas',
                    label: 'Lenguas Románicas y sus Literaturas',
                },
                {
                    value: 'Lenguas y Literaturas Modernas',
                    label: 'Lenguas y Literaturas Modernas',
                },
                {
                    value: 'Lenguas y Literaturas Modernas - Francés',
                    label: 'Lenguas y Literaturas Modernas - Francés',
                },
                {
                    value: 'Lenguas y Literaturas Modernas, Francés e Inglés',
                    label: 'Lenguas y Literaturas Modernas, Francés e Inglés',
                },
                {
                    value: 'Lenguas y Literaturas Modernas, Portugués',
                    label: 'Lenguas y Literaturas Modernas, Portugués',
                },
                {
                    value: 'Lenguas, Literaturas y Culturas Románicas',
                    label: 'Lenguas, Literaturas y Culturas Románicas',
                },
                { value: 'Lingüística', label: 'Lingüística' },
                {
                    value: 'Lingüística y Lenguas Aplicadas',
                    label: 'Lingüística y Lenguas Aplicadas',
                },
                {
                    value: 'Literatura General y Comparada',
                    label: 'Literatura General y Comparada',
                },
                {
                    value: 'Literaturas Comparadas',
                    label: 'Literaturas Comparadas',
                },
                { value: 'Moda', label: 'Moda' },
                { value: 'Música', label: 'Música' },
                { value: 'Musicología', label: 'Musicología' },
                {
                    value: 'Producción de Música y Sonido para la Industria del Entretenimiento',
                    label: 'Producción de Música y Sonido para la Industria del Entretenimiento',
                },
                { value: 'Teatro', label: 'Teatro' },
                {
                    value: 'Traducción e Interpretación',
                    label: 'Traducción e Interpretación',
                },
                {
                    value: 'Traducción e Interpretación: Alemán',
                    label: 'Traducción e Interpretación: Alemán',
                },
                {
                    value: 'Traducción e Interpretación: Alemán, Francés o Lengua de Signos Catalana',
                    label: 'Traducción e Interpretación: Alemán, Francés o Lengua de Signos Catalana',
                },
                {
                    value: 'Traducción e Interpretación: Árabe',
                    label: 'Traducción e Interpretación: Árabe',
                },
                {
                    value: 'Traducción e Interpretación: Francés',
                    label: 'Traducción e Interpretación: Francés',
                },
                {
                    value: 'Traducción e Interpretación: Galego-Inglés',
                    label: 'Traducción e Interpretación: Galego-Inglés',
                },
                {
                    value: 'Traducción e Interpretación: Inglés',
                    label: 'Traducción e Interpretación: Inglés',
                },
                {
                    value: 'Traducción e Interpretación: Inglés-Alemán',
                    label: 'Traducción e Interpretación: Inglés-Alemán',
                },
                {
                    value: 'Traducción e Interpretación: Inglés-Francés',
                    label: 'Traducción e Interpretación: Inglés-Francés',
                },
                {
                    value: 'Traducción y Comunicación Intercultural',
                    label: 'Traducción y Comunicación Intercultural',
                },
                {
                    value: 'Traducción y Mediación Interlingüística: Alemán',
                    label: 'Traducción y Mediación Interlingüística: Alemán',
                },
                {
                    value: 'Traducción y Mediación Interlingüística: Francés',
                    label: 'Traducción y Mediación Interlingüística: Francés',
                },
                {
                    value: 'Traducción y Mediación Interlingüística: Inglés',
                    label: 'Traducción y Mediación Interlingüística: Inglés',
                },
                {
                    value: 'Traducción, Interpretación y Lenguas Aplicadas',
                    label: 'Traducción, Interpretación y Lenguas Aplicadas',
                },
            ],
        },

        // Grupo: Grados Ciencias
        {
            label: 'Grados : Ciencias',
            options: [
                { value: 'Grado en Biología', label: 'Grado en Biología' },
                {
                    value: 'Grado en Biología Ambiental',
                    label: 'Grado en Biología Ambiental',
                },
                { value: 'Grado en Bioquímica', label: 'Grado en Bioquímica' },
                {
                    value: 'Grado en Bioquímica y Biología Molecular',
                    label: 'Grado en Bioquímica y Biología Molecular',
                },
                {
                    value: 'Grado en Bioquímica y Ciencias Biomédicas',
                    label: 'Grado en Bioquímica y Ciencias Biomédicas',
                },
                {
                    value: 'Grado en Biotecnología',
                    label: 'Grado en Biotecnología',
                },
                {
                    value: 'Grado en Ciencia y Tecnología de los Alimentos',
                    label: 'Grado en Ciencia y Tecnología de los Alimentos',
                },
                { value: 'Grado en Ciencias', label: 'Grado en Ciencias' },
                {
                    value: 'Grado en Ciencias Agrarias y Bioeconomía',
                    label: 'Grado en Ciencias Agrarias y Bioeconomía',
                },
                {
                    value: 'Grado en Ciencias Ambientales',
                    label: 'Grado en Ciencias Ambientales',
                },
                {
                    value: 'Grado en Ciencias del Mar',
                    label: 'Grado en Ciencias del Mar',
                },
                {
                    value: 'Grado en Ciencias Experimentales',
                    label: 'Grado en Ciencias Experimentales',
                },
                {
                    value: 'Grado en Ciencias y Tecnologías del Mar',
                    label: 'Grado en Ciencias y Tecnologías del Mar',
                },
                { value: 'Grado en Enología', label: 'Grado en Enología' },
                { value: 'Grado en Física', label: 'Grado en Física' },
                {
                    value: 'Grado en Física Aplicada',
                    label: 'Grado en Física Aplicada',
                },
                {
                    value: 'Grado en Física e Instrumentación Espacial',
                    label: 'Grado en Física e Instrumentación Espacial',
                },
                { value: 'Grado en Genética', label: 'Grado en Genética' },
                { value: 'Grado en Geología', label: 'Grado en Geología' },
                {
                    value: 'Grado en Innovación en Procesos y Productos Alimentarios',
                    label: 'Grado en Innovación en Procesos y Productos Alimentarios',
                },
                {
                    value: 'Grado en Matemática Aplicada',
                    label: 'Grado en Matemática Aplicada',
                },
                {
                    value: 'Grado en Matemáticas',
                    label: 'Grado en Matemáticas',
                },
                {
                    value: 'Grado en Matemáticas Aplicadas',
                    label: 'Grado en Matemáticas Aplicadas',
                },
                {
                    value: 'Grado en Matemáticas Computacionales y Analítica de Datos',
                    label: 'Grado en Matemáticas Computacionales y Analítica de Datos',
                },
                {
                    value: 'Grado en Medio Ambiente y Sostenibilidad',
                    label: 'Grado en Medio Ambiente y Sostenibilidad',
                },
                {
                    value: 'Grado en Microbiología',
                    label: 'Grado en Microbiología',
                },
                {
                    value: 'Grado en Nanociencia y Nanotecnología',
                    label: 'Grado en Nanociencia y Nanotecnología',
                },
                { value: 'Grado en Química', label: 'Grado en Química' },
            ],
        },

        // Grupo: Grados Ciencias de la Salud
        {
            label: 'Grados: Ciencias de la Salud',
            options: [
                { value: 'Bioinformática', label: 'Bioinformática' },
                {
                    value: 'Bioinformática / Bioinformatics',
                    label: 'Bioinformática / Bioinformatics',
                },
                {
                    value: 'Bioinformática y Datos Masivos',
                    label: 'Bioinformática y Datos Masivos',
                },
                {
                    value: 'Biología Humana',
                    label: 'Biología Humana',
                },
                {
                    value: 'Biología Sanitaria',
                    label: 'Biología Sanitaria',
                },
                {
                    value: 'Biomedicina',
                    label: 'Biomedicina',
                },
                {
                    value: 'Biomedicina Básica y Experimental',
                    label: 'Biomedicina Básica y Experimental',
                },
                {
                    value: 'Biomedicina y Terapias Avanzadas',
                    label: 'Biomedicina y Terapias Avanzadas',
                },
                {
                    value: 'Ciencias Biomédicas',
                    label: 'Ciencias Biomédicas',
                },
                {
                    value: 'Ciencias de la Actividad Física y del Deporte',
                    label: 'Ciencias de la Actividad Física y del Deporte',
                },
                {
                    value: 'Enfermería',
                    label: 'Enfermería',
                },
                {
                    value: 'Fisioterapia',
                    label: 'Fisioterapia',
                },
                {
                    value: 'Logopedia',
                    label: 'Logopedia',
                },
                {
                    value: 'Medicina',
                    label: 'Medicina',
                },
                {
                    value: 'Nutrición Humana y Dietética',
                    label: 'Nutrición Humana y Dietética',
                },
                {
                    value: 'Odontología',
                    label: 'Odontología',
                },
                {
                    value: 'Óptica y Optometría',
                    label: 'Óptica y Optometría',
                },
                {
                    value: 'Óptica, Optometría y Audiología',
                    label: 'Óptica, Optometría y Audiología',
                },
                {
                    value: 'Podología',
                    label: 'Podología',
                },
                {
                    value: 'Psicología',
                    label: 'Psicología',
                },
                {
                    value: 'Terapia Ocupacional',
                    label: 'Terapia Ocupacional',
                },
                {
                    value: 'Veterinaria',
                    label: 'Veterinaria',
                },
            ],
        },

        // Grupo: Grados Ciencias Sociales y Jurídicas
        {
            label: 'Grados: Ciencias Sociales y Jurídicas',
            options: [
                {
                    value: 'Grado Abierto en Ciencias Sociales y Humanidades',
                    label: 'Grado Abierto en Ciencias Sociales y Humanidades',
                },
                {
                    value: 'Grado Abierto en Ciencias Sociales y Jurídicas',
                    label: 'Grado Abierto en Ciencias Sociales y Jurídicas',
                },
                {
                    value: 'Administración de Empresas',
                    label: 'Administración de Empresas',
                },
                {
                    value: 'Administración de Empresas y Gestión de la Innovación',
                    label: 'Administración de Empresas y Gestión de la Innovación',
                },
                {
                    value: 'Administración de Negocios Digitales',
                    label: 'Administración de Negocios Digitales',
                },
                {
                    value: 'Administración y Dirección de Empresas',
                    label: 'Administración y Dirección de Empresas',
                },
                {
                    value: 'Administración y Dirección de Empresas Tecnológicas',
                    label: 'Administración y Dirección de Empresas Tecnológicas',
                },
                {
                    value: 'Administración y Gestión Pública',
                    label: 'Administración y Gestión Pública',
                },
                {
                    value: 'Análisis de Datos en la Empresa / Business Analytics',
                    label: 'Análisis de Datos en la Empresa / Business Analytics',
                },
                {
                    value: 'Análisis de Negocios / Business Analytics',
                    label: 'Análisis de Negocios / Business Analytics',
                },
                { value: 'Análisis Económico', label: 'Análisis Económico' },
                {
                    value: 'Analítica de Negocios / Business Analytics',
                    label: 'Analítica de Negocios / Business Analytics',
                },
                {
                    value: 'Business Data Analytics',
                    label: 'Business Data Analytics',
                },
                {
                    value: 'Business Intelligence & Data Analytics',
                    label: 'Business Intelligence & Data Analytics',
                },
                {
                    value: 'Ciencia Política y Administración Pública',
                    label: 'Ciencia Política y Administración Pública',
                },
                {
                    value: 'Ciencia Política y de la Administración',
                    label: 'Ciencia Política y de la Administración',
                },
                {
                    value: 'Ciencia Política y Gestión Pública',
                    label: 'Ciencia Política y Gestión Pública',
                },
                {
                    value: 'Ciencia, Gestión e Ingeniería de Servicios',
                    label: 'Ciencia, Gestión e Ingeniería de Servicios',
                },
                {
                    value: 'Ciencias Criminológicas y de la Seguridad',
                    label: 'Ciencias Criminológicas y de la Seguridad',
                },
                {
                    value: 'Ciencias Culinarias y Gastronómicas',
                    label: 'Ciencias Culinarias y Gastronómicas',
                },
                {
                    value: 'Ciencias de la Seguridad',
                    label: 'Ciencias de la Seguridad',
                },
                {
                    value: 'Ciencias del Trabajo, Relaciones Laborales y Recursos Humanos',
                    label: 'Ciencias del Trabajo, Relaciones Laborales y Recursos Humanos',
                },
                {
                    value: 'Ciencias del Transporte y la Logística',
                    label: 'Ciencias del Transporte y la Logística',
                },
                {
                    value: 'Ciencias Empresariales',
                    label: 'Ciencias Empresariales',
                },
                {
                    value: 'Ciencias Empresariales - Management',
                    label: 'Ciencias Empresariales - Management',
                },
                {
                    value: 'Ciencias Gastronómicas',
                    label: 'Ciencias Gastronómicas',
                },
                {
                    value: 'Ciencias Gastronómicas y Gestión Hotelera',
                    label: 'Ciencias Gastronómicas y Gestión Hotelera',
                },
                {
                    value: 'Ciencias Inmobiliarias',
                    label: 'Ciencias Inmobiliarias',
                },
                {
                    value: 'Ciencias Jurídicas de las Administraciones Públicas',
                    label: 'Ciencias Jurídicas de las Administraciones Públicas',
                },
                { value: 'Ciencias Políticas', label: 'Ciencias Políticas' },
                {
                    value: 'Ciencias Políticas y de la Administración',
                    label: 'Ciencias Políticas y de la Administración',
                },
                {
                    value: 'Ciencias Políticas y de la Administración Pública',
                    label: 'Ciencias Políticas y de la Administración Pública',
                },
                {
                    value: 'Ciencias Políticas y Gestión Pública',
                    label: 'Ciencias Políticas y Gestión Pública',
                },
                {
                    value: 'Ciencias Políticas, Gobierno y Administración Pública',
                    label: 'Ciencias Políticas, Gobierno y Administración Pública',
                },
                {
                    value: 'Comercialización y Logística',
                    label: 'Comercialización y Logística',
                },
                { value: 'Comercio', label: 'Comercio' },
                {
                    value: 'Comercio Internacional',
                    label: 'Comercio Internacional',
                },
                {
                    value: 'Comercio y Marketing',
                    label: 'Comercio y Marketing',
                },
                {
                    value: 'Comportamiento y Ciencias Sociales',
                    label: 'Comportamiento y Ciencias Sociales',
                },
                { value: 'Comunicación', label: 'Comunicación' },
                {
                    value: 'Comunicación Audiovisual',
                    label: 'Comunicación Audiovisual',
                },
                {
                    value: 'Comunicación Audiovisual y Multimedia',
                    label: 'Comunicación Audiovisual y Multimedia',
                },
                {
                    value: 'Comunicación Audiovisual y Nuevos Medios',
                    label: 'Comunicación Audiovisual y Nuevos Medios',
                },
                {
                    value: 'Comunicación Corporativa, Protocolo y Organización de Eventos',
                    label: 'Comunicación Corporativa, Protocolo y Organización de Eventos',
                },
                {
                    value: 'Comunicación de las Organizaciones',
                    label: 'Comunicación de las Organizaciones',
                },
                {
                    value: 'Comunicación Digital',
                    label: 'Comunicación Digital',
                },
                {
                    value: 'Comunicación Global y Estratégica',
                    label: 'Comunicación Global y Estratégica',
                },
                {
                    value: 'Comunicación Internacional',
                    label: 'Comunicación Internacional',
                },
                {
                    value: 'Comunicación y Creación Audiovisual',
                    label: 'Comunicación y Creación Audiovisual',
                },
                {
                    value: 'Comunicación y Medios Digitales',
                    label: 'Comunicación y Medios Digitales',
                },
                {
                    value: 'Comunicación y Periodismo Audiovisual',
                    label: 'Comunicación y Periodismo Audiovisual',
                },
                {
                    value: 'Comunicación y Relaciones Públicas',
                    label: 'Comunicación y Relaciones Públicas',
                },
                {
                    value: 'Contabilidad y Finanzas',
                    label: 'Contabilidad y Finanzas',
                },
                {
                    value: 'Creación, Administración y Dirección de Empresas',
                    label: 'Creación, Administración y Dirección de Empresas',
                },
                {
                    value: 'Criminalística: Ciencias y Tecnologías Forenses',
                    label: 'Criminalística: Ciencias y Tecnologías Forenses',
                },
                { value: 'Criminología', label: 'Criminología' },
                {
                    value: 'Criminología y Ciencias de la Seguridad',
                    label: 'Criminología y Ciencias de la Seguridad',
                },
                {
                    value: 'Criminología y Políticas Públicas de Prevención',
                    label: 'Criminología y Políticas Públicas de Prevención',
                },
                {
                    value: 'Criminología y Seguridad',
                    label: 'Criminología y Seguridad',
                },
                {
                    value: 'Datos y Analítica de Negocio',
                    label: 'Datos y Analítica de Negocio',
                },
                { value: 'Derecho', label: 'Derecho' },
                {
                    value: 'Digital Business, Design and Innovation',
                    label: 'Digital Business, Design and Innovation',
                },
                {
                    value: 'Dirección de Empresas',
                    label: 'Dirección de Empresas',
                },
                {
                    value: 'Dirección de Empresas en el Ámbito Digital / Digital Business',
                    label: 'Dirección de Empresas en el Ámbito Digital / Digital Business',
                },
                {
                    value: 'Dirección de Empresas Tecnológicas',
                    label: 'Dirección de Empresas Tecnológicas',
                },
                { value: 'Dirección Hotelera', label: 'Dirección Hotelera' },
                {
                    value: 'Dirección Internacional de Empresas de Turismo y Ocio',
                    label: 'Dirección Internacional de Empresas de Turismo y Ocio',
                },
                {
                    value: 'Dirección y Creación de Empresas',
                    label: 'Dirección y Creación de Empresas',
                },
                {
                    value: 'Dirección y Gestión de Empresas en el Ámbito Digital',
                    label: 'Dirección y Gestión de Empresas en el Ámbito Digital',
                },
                {
                    value: 'Dirección y Gestión de Empresas en el Ámbito Digital / Digital Business',
                    label: 'Dirección y Gestión de Empresas el en Ámbito Digital / Digital Business',
                },
                {
                    value: 'Dirección y Gestión Pública',
                    label: 'Dirección y Gestión Pública',
                },
                { value: 'Economía', label: 'Economía' },
                {
                    value: 'Economía Financiera y Actuarial',
                    label: 'Economía Financiera y Actuarial',
                },
                { value: 'Economía y Finanzas', label: 'Economía y Finanzas' },
                { value: 'Economía y Gestión', label: 'Economía y Gestión' },
                {
                    value: 'Economía y Negocios Internacionales',
                    label: 'Economía y Negocios Internacionales',
                },
                { value: 'Educación Infantil', label: 'Educación Infantil' },
                { value: 'Educación Primaria', label: 'Educación Primaria' },
                { value: 'Educación Social', label: 'Educación Social' },
                {
                    value: 'Emprendimiento y Gestión de Empresas',
                    label: 'Emprendimiento y Gestión de Empresas',
                },
                {
                    value: 'Empresa Internacional',
                    label: 'Empresa Internacional',
                },
                {
                    value: 'Empresa y Tecnología',
                    label: 'Empresa y Tecnología',
                },
                {
                    value: 'Empresas y Actividades Turísticas',
                    label: 'Empresas y Actividades Turísticas',
                },
                { value: 'Estadística', label: 'Estadística' },
                {
                    value: 'Estadística Aplicada',
                    label: 'Estadística Aplicada',
                },
                {
                    value: 'Estadística Empresarial',
                    label: 'Estadística Empresarial',
                },
                {
                    value: 'Estadística y Empresa',
                    label: 'Estadística y Empresa',
                },
                {
                    value: 'Estudios de Comunicación y Medios',
                    label: 'Estudios de Comunicación y Medios',
                },
                { value: 'Estudios Globales', label: 'Estudios Globales' },
                {
                    value: 'Estudios Globales / Global Studies',
                    label: 'Estudios Globales / Global Studies',
                },
                {
                    value: 'Estudios Internacionales',
                    label: 'Estudios Internacionales',
                },
                { value: 'Estudios Policiales', label: 'Estudios Policiales' },
                { value: 'Finanzas', label: 'Finanzas' },
                {
                    value: 'Finanzas y Contabilidad',
                    label: 'Finanzas y Contabilidad',
                },
                {
                    value: 'Finanzas, Banca y Seguros',
                    label: 'Finanzas, Banca y Seguros',
                },
                {
                    value: 'Fiscalidad y Administración Pública',
                    label: 'Fiscalidad y Administración Pública',
                },
                { value: 'Gastronomía', label: 'Gastronomía' },
                {
                    value: 'Gastronomía y Artes Culinarias',
                    label: 'Gastronomía y Artes Culinarias',
                },
                { value: 'Geografía', label: 'Geografía' },
                {
                    value: 'Geografía e Historia',
                    label: 'Geografía e Historia',
                },
                {
                    value: 'Geografía y Cambio Global',
                    label: 'Geografía y Cambio Global',
                },
                {
                    value: 'Geografía y Gestión del Territorio',
                    label: 'Geografía y Gestión del Territorio',
                },
                {
                    value: 'Geografía y Medio Ambiente',
                    label: 'Geografía y Medio Ambiente',
                },
                {
                    value: 'Geografía y Ordenación del Territorio',
                    label: 'Geografía y Ordenación del Territorio',
                },
                {
                    value: 'Geografía y Planificación Territorial',
                    label: 'Geografía y Planificación Territorial',
                },
                {
                    value: 'Geografía, Análisis Territorial y Sostenibilidad',
                    label: 'Geografía, Análisis Territorial y Sostenibilidad',
                },
                {
                    value: 'Geografía, Desarrollo Territorial y Sostenibilidad',
                    label: 'Geografía, Desarrollo Territorial y Sostenibilidad',
                },
                {
                    value: 'Geografía, Medio Ambiente y Planificación Territorial',
                    label: 'Geografía, Medio Ambiente y Planificación Territorial',
                },
                {
                    value: 'Geografía, Territorio y Medio Ambiente',
                    label: 'Geografía, Territorio y Medio Ambiente',
                },
                {
                    value: 'Gestión Aplicada / Applied Management',
                    label: 'Gestión Aplicada / Applied Management',
                },
                {
                    value: 'Gestión Comercial y Marketing',
                    label: 'Gestión Comercial y Marketing',
                },
                {
                    value: 'Gestión de Ciudades Inteligentes y Sostenibles',
                    label: 'Gestión de Ciudades Inteligentes y Sostenibles',
                },
                {
                    value: 'Gestión de Empresas Hosteleras',
                    label: 'Gestión de Empresas Hosteleras',
                },
                {
                    value: 'Gestión de Información y Contenidos Digitales',
                    label: 'Gestión de Información y Contenidos Digitales',
                },
                {
                    value: 'Gestión de la Ciberseguridad',
                    label: 'Gestión de la Ciberseguridad',
                },
                {
                    value: 'Gestión de la Comunicación Global / Global Communication Management',
                    label: 'Gestión de la Comunicación Global / Global Communication Management',
                },
                {
                    value: 'Gestión de la Información y Contenidos Digitales',
                    label: 'Gestión de la Información y Contenidos Digitales',
                },
                {
                    value: 'Gestión de la Información y Documentación Digital',
                    label: 'Gestión de la Información y Documentación Digital',
                },
                {
                    value: 'Gestión de la Sociedad Digital',
                    label: 'Gestión de la Sociedad Digital',
                },
                { value: 'Gestión de Negocios', label: 'Gestión de Negocios' },
                {
                    value: 'Gestión de Pequeñas y Medianas Empresas',
                    label: 'Gestión de Pequeñas y Medianas Empresas',
                },
                {
                    value: 'Gestión de Seguridad Pública',
                    label: 'Gestión de Seguridad Pública',
                },
                {
                    value: 'Gestión del Transporte y la Logística',
                    label: 'Gestión del Transporte y la Logística',
                },
                { value: 'Gestión del Turismo', label: 'Gestión del Turismo' },
                { value: 'Gestión Deportiva', label: 'Gestión Deportiva' },
                {
                    value: 'Gestión Deportiva / Sport Management',
                    label: 'Gestión Deportiva / Sport Management',
                },
                {
                    value: 'Gestión Digital de Información y Comunicación',
                    label: 'Gestión Digital de Información y Comunicación',
                },
                {
                    value: 'Gestión Empresarial Basada en el Análisis de Datos',
                    label: 'Gestión Empresarial Basada en el Análisis de Datos',
                },
                {
                    value: 'Gestión en Turismo y Hotelería',
                    label: 'Gestión en Turismo y Hotelería',
                },
                {
                    value: 'Gestión Hotelera y Turística',
                    label: 'Gestión Hotelera y Turística',
                },
                {
                    value: 'Gestión Industrial de la Moda',
                    label: 'Gestión Industrial de la Moda',
                },
                { value: 'Gestión Logística', label: 'Gestión Logística' },
                {
                    value: 'Gestión Turística y del Ocio',
                    label: 'Gestión Turística y del Ocio',
                },
                {
                    value: 'Gestión Turística y Hotelera',
                    label: 'Gestión Turística y Hotelera',
                },
                {
                    value: 'Gestión y Administración Pública',
                    label: 'Gestión y Administración Pública',
                },
                {
                    value: 'Gestión y Comunicación de la Moda / Fashion Management and Communication',
                    label: 'Gestión y Comunicación de la Moda / Fashion Management and Communication',
                },
                {
                    value: 'Global Governance, Economics & Legal Order',
                    label: 'Global Governance, Economics & Legal Order',
                },
                { value: 'Historia y Política', label: 'Historia y Política' },
                {
                    value: 'Historia, Geografía e Historia del Arte',
                    label: 'Historia, Geografía e Historia del Arte',
                },
                {
                    value: 'Historia, Política y Economía Contemporáneas',
                    label: 'Historia, Política y Economía Contemporáneas',
                },
                {
                    value: 'Humanidades Digitales Globales',
                    label: 'Humanidades Digitales Globales',
                },
                {
                    value: 'Ingeniería de la Empresa',
                    label: 'Ingeniería de la Empresa',
                },
                {
                    value: 'Ingeniería Eléctrica y Electrónica',
                    label: 'Ingeniería Eléctrica y Electrónica',
                },
                {
                    value: 'Inteligencia de Negocios',
                    label: 'Inteligencia de Negocios',
                },
                {
                    value: 'Inteligencia de Negocios / Business Intelligence',
                    label: 'Inteligencia de Negocios / Business Intelligence',
                },
                {
                    value: 'Inteligencia y Analítica de Negocios / BIA',
                    label: 'Inteligencia y Analítica de Negocios / BIA',
                },
                {
                    value: 'International Business Economics',
                    label: 'International Business Economics',
                },
                {
                    value: 'Lengua de Signos Española y Comunidad Sorda',
                    label: 'Lengua de Signos Española y Comunidad Sorda',
                },
                {
                    value: 'Liderazgo Emprendedor e Innovación',
                    label: 'Liderazgo Emprendedor e Innovación',
                },
                {
                    value: 'Logística Empresarial',
                    label: 'Logística Empresarial',
                },
                {
                    value: 'Logística y Negocios Marítimos',
                    label: 'Logística y Negocios Marítimos',
                },
                {
                    value: 'Maestro en Educación Infantil',
                    label: 'Maestro en Educación Infantil',
                },
                {
                    value: 'Maestro en Educación Primaria',
                    label: 'Maestro en Educación Primaria',
                },
                {
                    value: 'Magisterio en Educación Infantil',
                    label: 'Magisterio en Educación Infantil',
                },
                {
                    value: 'Magisterio en Educación Primaria',
                    label: 'Magisterio en Educación Primaria',
                },
                { value: 'Marketing', label: 'Marketing' },
                {
                    value: 'Marketing e Investigación de Mercados',
                    label: 'Marketing e Investigación de Mercados',
                },
                {
                    value: 'Marketing y Comunicación',
                    label: 'Marketing y Comunicación',
                },
                {
                    value: 'Marketing y Comunicación Digital',
                    label: 'Marketing y Comunicación Digital',
                },
                {
                    value: 'Marketing y Comunidades Digitales',
                    label: 'Marketing y Comunidades Digitales',
                },
                {
                    value: 'Marketing y Dirección Comercial',
                    label: 'Marketing y Dirección Comercial',
                },
                {
                    value: 'Marketing y Gestión Comercial',
                    label: 'Marketing y Gestión Comercial',
                },
                {
                    value: 'Medios Audiovisuales',
                    label: 'Medios Audiovisuales',
                },
                {
                    value: 'Negocio Digital e Innovación en Turismo',
                    label: 'Negocio Digital e Innovación en Turismo',
                },
                {
                    value: 'Negocios Internacionales',
                    label: 'Negocios Internacionales',
                },
                {
                    value: 'Negocios Internacionales / International Business',
                    label: 'Negocios Internacionales / International Business',
                },
                {
                    value: 'Negocios y Marketing Internacional',
                    label: 'Negocios y Marketing Internacional',
                },
                {
                    value: 'Organización de Eventos, Protocolo y Relaciones Institucionales',
                    label: 'Organización de Eventos, Protocolo y Relaciones Institucionales',
                },
                { value: 'Pedagogía', label: 'Pedagogía' },
                { value: 'Periodismo', label: 'Periodismo' },
                {
                    value: 'Periodismo y Comunicación Corporativa',
                    label: 'Periodismo y Comunicación Corporativa',
                },
                {
                    value: 'Periodismo y Medios Digitales',
                    label: 'Periodismo y Medios Digitales',
                },
                {
                    value: 'Periodismo, Comunicación Digital y Nuevos Medios',
                    label: 'Periodismo, Comunicación Digital y Nuevos Medios',
                },
                {
                    value: 'Políticas de Seguridad y Control de la Criminalidad',
                    label: 'Políticas de Seguridad y Control de la Criminalidad',
                },
                {
                    value: 'Prevención y Seguridad Integral',
                    label: 'Prevención y Seguridad Integral',
                },
                {
                    value: 'Protocolo y Organización de Eventos',
                    label: 'Protocolo y Organización de Eventos',
                },
                {
                    value: 'Protocolo y Organización de Eventos y Comunicación Corporativa',
                    label: 'Protocolo y Organización de Eventos y Comunicación Corporativa',
                },
                { value: 'Publicidad', label: 'Publicidad' },
                { value: 'Publicidad Creativa', label: 'Publicidad Creativa' },
                {
                    value: 'Publicidad y Creación de Marca',
                    label: 'Publicidad y Creación de Marca',
                },
                {
                    value: 'Publicidad y Marketing Digital',
                    label: 'Publicidad y Marketing Digital',
                },
                {
                    value: 'Publicidad y Relaciones Públicas',
                    label: 'Publicidad y Relaciones Públicas',
                },
                {
                    value: 'Publicidad, Marketing y Relaciones Públicas',
                    label: 'Publicidad, Marketing y Relaciones Públicas',
                },
                {
                    value: 'Recursos Humanos y Relaciones Laborales',
                    label: 'Recursos Humanos y Relaciones Laborales',
                },
                {
                    value: 'Relaciones Internacionales',
                    label: 'Relaciones Internacionales',
                },
                {
                    value: 'Relaciones Internacionales y Unión Europea',
                    label: 'Relaciones Internacionales y Unión Europea',
                },
                {
                    value: 'Relaciones Laborales',
                    label: 'Relaciones Laborales',
                },
                {
                    value: 'Relaciones Laborales y Desarrollo de Recursos Humanos',
                    label: 'Relaciones Laborales y Desarrollo de Recursos Humanos',
                },
                {
                    value: 'Relaciones Laborales y Empleo',
                    label: 'Relaciones Laborales y Empleo',
                },
                {
                    value: 'Relaciones Laborales y Ocupación',
                    label: 'Relaciones Laborales y Ocupación',
                },
                {
                    value: 'Relaciones Laborales y Recursos Humanos',
                    label: 'Relaciones Laborales y Recursos Humanos',
                },
                { value: 'Seguridad', label: 'Seguridad' },
                {
                    value: 'Seguridad Pública y Privada',
                    label: 'Seguridad Pública y Privada',
                },
                {
                    value: 'Seguridad y Control de Riesgos',
                    label: 'Seguridad y Control de Riesgos',
                },
                { value: 'Sociología', label: 'Sociología' },
                { value: 'Sociología Aplicada', label: 'Sociología Aplicada' },
                { value: 'Trabajo Social', label: 'Trabajo Social' },
                { value: 'Turismo', label: 'Turismo' },
                {
                    value: 'Turismo y Dirección de Empresas Turísticas',
                    label: 'Turismo y Dirección de Empresas Turísticas',
                },
            ],
        },

        // Grupo: Grados Ingeniería y Arquitectura
        {
            label: 'Grados: Ingeniería y Arquitectura',
            options: [
                {
                    value: 'Grado Abierto en Ingeniería',
                    label: 'Grado Abierto en Ingeniería',
                },
                { value: 'Arquitectura', label: 'Arquitectura' },
                { value: 'Arquitectura Naval', label: 'Arquitectura Naval' },
                {
                    value: 'Arquitectura Naval e Ingeniería de Sistemas Marinos',
                    label: 'Arquitectura Naval e Ingeniería de Sistemas Marinos',
                },
                {
                    value: 'Arquitectura Naval e Ingeniería Marítima',
                    label: 'Arquitectura Naval e Ingeniería Marítima',
                },
                {
                    value: 'Arquitectura Técnica',
                    label: 'Arquitectura Técnica',
                },
                {
                    value: 'Arquitectura Técnica y Edificación',
                    label: 'Arquitectura Técnica y Edificación',
                },
                { value: 'Arte Digital', label: 'Arte Digital' },
                { value: 'Artes Digitales', label: 'Artes Digitales' },
                { value: 'Bioingeniería', label: 'Bioingeniería' },
                {
                    value: 'Biomedical Engineering (en inglés)',
                    label: 'Biomedical Engineering (en inglés)',
                },
                { value: 'Ciberseguridad', label: 'Ciberseguridad' },
                {
                    value: 'Ciberseguridad e Inteligencia Artificial',
                    label: 'Ciberseguridad e Inteligencia Artificial',
                },
                { value: 'Ciencia de Datos', label: 'Ciencia de Datos' },
                {
                    value: 'Ciencia de Datos Aplicada',
                    label: 'Ciencia de Datos Aplicada',
                },
                {
                    value: 'Ciencia de Datos e Inteligencia Artificial',
                    label: 'Ciencia de Datos e Inteligencia Artificial',
                },
                {
                    value: 'Ciencia de los Datos Aplicada',
                    label: 'Ciencia de los Datos Aplicada',
                },
                {
                    value: 'Ciencia e Ingeniería de Datos',
                    label: 'Ciencia e Ingeniería de Datos',
                },
                { value: 'Ciencias de Datos', label: 'Ciencias de Datos' },
                {
                    value: 'Ciencias e Ingeniería de Datos',
                    label: 'Ciencias e Ingeniería de Datos',
                },
                {
                    value: 'Ciencias y Tecnologías Aplicadas al Deporte y al Acondicionamiento Físico',
                    label: 'Ciencias y Tecnologías Aplicadas al Deporte y al Acondicionamiento Físico',
                },
                {
                    value: 'Computación e Inteligencia Artificial',
                    label: 'Computación e Inteligencia Artificial',
                },
                {
                    value: 'Comunicación Interactiva',
                    label: 'Comunicación Interactiva',
                },
                {
                    value: 'Creación Digital, Animación y Videojuegos',
                    label: 'Creación Digital, Animación y Videojuegos',
                },
                {
                    value: 'Creación y Narración de Videojuegos',
                    label: 'Creación y Narración de Videojuegos',
                },
                {
                    value: 'Desarrollo de Aplicaciones 3D Interactivas y Videojuegos',
                    label: 'Desarrollo de Aplicaciones 3D Interactivas y Videojuegos',
                },
                {
                    value: 'Desarrollo de Videojuegos',
                    label: 'Desarrollo de Videojuegos',
                },
                {
                    value: 'Diseño Arquitectónico y Interiorismo',
                    label: 'Diseño Arquitectónico y Interiorismo',
                },
                { value: 'Diseño de Producto', label: 'Diseño de Producto' },
                {
                    value: 'Diseño de Videojuegos',
                    label: 'Diseño de Videojuegos',
                },
                {
                    value: 'Diseño Digital y Tecnologías Multimedia',
                    label: 'Diseño Digital y Tecnologías Multimedia',
                },
                {
                    value: 'Diseño y Desarrollo de Videojuegos',
                    label: 'Diseño y Desarrollo de Videojuegos',
                },
                {
                    value: 'Diseño y Desarrollo de Videojuegos y Entornos Virtuales',
                    label: 'Diseño y Desarrollo de Videojuegos y Entornos Virtuales',
                },
                {
                    value: 'Diseño y Desarrollo de Videojuegos y Experiencias Interactivas',
                    label: 'Diseño y Desarrollo de Videojuegos y Experiencias Interactivas',
                },
                {
                    value: 'Diseño y Desarrollo de Videojuegos y Juegos Aplicados',
                    label: 'Diseño y Desarrollo de Videojuegos y Juegos Aplicados',
                },
                {
                    value: 'Diseño y Producción de Videojuegos',
                    label: 'Diseño y Producción de Videojuegos',
                },
                { value: 'Edificación', label: 'Edificación' },
                {
                    value: 'Estudios de Arquitectura',
                    label: 'Estudios de Arquitectura',
                },
                {
                    value: 'Estudios en Arquitectura',
                    label: 'Estudios en Arquitectura',
                },
                {
                    value: 'Fundamentos de Arquitectura',
                    label: 'Fundamentos de Arquitectura',
                },
                {
                    value: 'Fundamentos de Arquitectura y Urbanismo',
                    label: 'Fundamentos de Arquitectura y Urbanismo',
                },
                {
                    value: 'Fundamentos de la Arquitectura',
                    label: 'Fundamentos de la Arquitectura',
                },
                { value: 'Gestión Aeronáutica', label: 'Gestión Aeronáutica' },
                {
                    value: 'Gestión y Operaciones del Transporte Aéreo',
                    label: 'Gestión y Operaciones del Transporte Aéreo',
                },
                { value: 'Industria Digital', label: 'Industria Digital' },
                {
                    value: 'Informática Industrial y Robótica',
                    label: 'Informática Industrial y Robótica',
                },
                {
                    value: 'Informática y Servicios',
                    label: 'Informática y Servicios',
                },
                {
                    value: 'Ingeniería Aeroespacial',
                    label: 'Ingeniería Aeroespacial',
                },
                {
                    value: 'Ingeniería Aeroespacial en Aeronavegación',
                    label: 'Ingeniería Aeroespacial en Aeronavegación',
                },
                {
                    value: 'Ingeniería Aeroespacial en Aeronaves',
                    label: 'Ingeniería Aeroespacial en Aeronaves',
                },
                {
                    value: 'Ingeniería Aeroespacial en Transporte y Aeropuertos',
                    label: 'Ingeniería Aeroespacial en Transporte y Aeropuertos',
                },
                {
                    value: 'Ingeniería Aeroespacial en Vehículos Aeroespaciales',
                    label: 'Ingeniería Aeroespacial en Vehículos Aeroespaciales',
                },
                { value: 'Ingeniería Agraria', label: 'Ingeniería Agraria' },
                {
                    value: 'Ingeniería Agraria y Alimentaria',
                    label: 'Ingeniería Agraria y Alimentaria',
                },
                {
                    value: 'Ingeniería Agraria y Energética',
                    label: 'Ingeniería Agraria y Energética',
                },
                { value: 'Ingeniería Agrícola', label: 'Ingeniería Agrícola' },
                {
                    value: 'Ingeniería Agrícola y Agroalimentaria',
                    label: 'Ingeniería Agrícola y Agroalimentaria',
                },
                {
                    value: 'Ingeniería Agrícola y Agroambiental',
                    label: 'Ingeniería Agrícola y Agroambiental',
                },
                {
                    value: 'Ingeniería Agrícola y del Medio Rural',
                    label: 'Ingeniería Agrícola y del Medio Rural',
                },
                {
                    value: 'Ingeniería Agroalimentaria',
                    label: 'Ingeniería Agroalimentaria',
                },
                {
                    value: 'Ingeniería Agroalimentaria y Agroambiental',
                    label: 'Ingeniería Agroalimentaria y Agroambiental',
                },
                {
                    value: 'Ingeniería Agroalimentaria y del Medio Rural',
                    label: 'Ingeniería Agroalimentaria y del Medio Rural',
                },
                {
                    value: 'Ingeniería Agroalimentaria y Sistemas Biológicos',
                    label: 'Ingeniería Agroalimentaria y Sistemas Biológicos',
                },
                {
                    value: 'Ingeniería Agroambiental',
                    label: 'Ingeniería Agroambiental',
                },
                {
                    value: 'Ingeniería Alimentaria',
                    label: 'Ingeniería Alimentaria',
                },
                {
                    value: 'Ingeniería Ambiental',
                    label: 'Ingeniería Ambiental',
                },
                {
                    value: 'Ingeniería Biomédica',
                    label: 'Ingeniería Biomédica',
                },
                { value: 'Ingeniería Civil', label: 'Ingeniería Civil' },
                {
                    value: 'Ingeniería Civil (con reserva plaza Máster)',
                    label: 'Ingeniería Civil (con reserva plaza Máster)',
                },
                {
                    value: 'Ingeniería Civil en Construcciones Civiles',
                    label: 'Ingeniería Civil en Construcciones Civiles',
                },
                {
                    value: 'Ingeniería Civil y Territorial',
                    label: 'Ingeniería Civil y Territorial',
                },
                {
                    value: 'Ingeniería Civil, Especialidad Transportes y Territorio',
                    label: 'Ingeniería Civil, Especialidad Transportes y Territorio',
                },
                {
                    value: 'Ingeniería de Bioprocesos Alimentarios',
                    label: 'Ingeniería de Bioprocesos Alimentarios',
                },
                {
                    value: 'Ingeniería de Ciencias Agronómicas',
                    label: 'Ingeniería de Ciencias Agronómicas',
                },
                {
                    value: 'Ingeniería de Computadores',
                    label: 'Ingeniería de Computadores',
                },
                {
                    value: 'Ingeniería de Comunicaciones Móviles y Espaciales',
                    label: 'Ingeniería de Comunicaciones Móviles y Espaciales',
                },
                { value: 'Ingeniería de Datos', label: 'Ingeniería de Datos' },
                {
                    value: 'Ingeniería de Datos e Inteligencia Artificial',
                    label: 'Ingeniería de Datos e Inteligencia Artificial',
                },
                {
                    value: 'Ingeniería de Datos en Procesos Industriales',
                    label: 'Ingeniería de Datos en Procesos Industriales',
                },
                {
                    value: 'Ingeniería de Edificación',
                    label: 'Ingeniería de Edificación',
                },
                {
                    value: 'Ingeniería de Energías Renovables',
                    label: 'Ingeniería de Energías Renovables',
                },
                {
                    value: 'Ingeniería de la Automoción',
                    label: 'Ingeniería de la Automoción',
                },
                {
                    value: 'Ingeniería de la Ciberseguridad',
                    label: 'Ingeniería de la Ciberseguridad',
                },
                {
                    value: 'Ingeniería de la Energía',
                    label: 'Ingeniería de la Energía',
                },
                {
                    value: 'Ingeniería de la Energía y Recursos Minerales',
                    label: 'Ingeniería de la Energía y Recursos Minerales',
                },
                {
                    value: 'Ingeniería de la Energía y Sostenibilidad',
                    label: 'Ingeniería de la Energía y Sostenibilidad',
                },
                {
                    value: 'Ingeniería de la Salud',
                    label: 'Ingeniería de la Salud',
                },
                {
                    value: 'Ingeniería de la Seguridad',
                    label: 'Ingeniería de la Seguridad',
                },
                {
                    value: 'Ingeniería de las Explotaciones Agropecuarias',
                    label: 'Ingeniería de las Explotaciones Agropecuarias',
                },
                {
                    value: 'Ingeniería de las Industrias Agrarias y Alimentarias',
                    label: 'Ingeniería de las Industrias Agrarias y Alimentarias',
                },
                {
                    value: 'Ingeniería de las Tecnologías de la Información Geoespacial',
                    label: 'Ingeniería de las Tecnologías de la Información Geoespacial',
                },
                {
                    value: 'Ingeniería de las Tecnologías Industriales',
                    label: 'Ingeniería de las Tecnologías Industriales',
                },
                {
                    value: 'Ingeniería de los Recursos Energéticos',
                    label: 'Ingeniería de los Recursos Energéticos',
                },
                {
                    value: 'Ingeniería de los Recursos Energéticos, Combustibles y Explosivos',
                    label: 'Ingeniería de los Recursos Energéticos, Combustibles y Explosivos',
                },
                {
                    value: 'Ingeniería de los Recursos Mineros y Energéticos',
                    label: 'Ingeniería de los Recursos Mineros y Energéticos',
                },
                {
                    value: 'Ingeniería de Materiales',
                    label: 'Ingeniería de Materiales',
                },
                {
                    value: 'Ingeniería de Obras Públicas',
                    label: 'Ingeniería de Obras Públicas',
                },
                {
                    value: 'Ingeniería de Obras Públicas en Construcciones Civiles',
                    label: 'Ingeniería de Obras Públicas en Construcciones Civiles',
                },
                {
                    value: 'Ingeniería de Organización',
                    label: 'Ingeniería de Organización',
                },
                {
                    value: 'Ingeniería de Organización Industrial',
                    label: 'Ingeniería de Organización Industrial',
                },
                {
                    value: 'Ingeniería de Procesos Químicos Industriales',
                    label: 'Ingeniería de Procesos Químicos Industriales',
                },
                {
                    value: 'Ingeniería de Recursos Minerales',
                    label: 'Ingeniería de Recursos Minerales',
                },
                {
                    value: 'Ingeniería de Recursos Minerales y su Reciclaje',
                    label: 'Ingeniería de Recursos Minerales y su Reciclaje',
                },
                {
                    value: 'Ingeniería de Redes de Telecomunicación',
                    label: 'Ingeniería de Redes de Telecomunicación',
                },
                {
                    value: 'Ingeniería de Sistemas Aeroespaciales',
                    label: 'Ingeniería de Sistemas Aeroespaciales',
                },
                {
                    value: 'Ingeniería de Sistemas Audiovisuales',
                    label: 'Ingeniería de Sistemas Audiovisuales',
                },
                {
                    value: 'Ingeniería de Sistemas Audiovisuales de Telecomunicación',
                    label: 'Ingeniería de Sistemas Audiovisuales de Telecomunicación',
                },
                {
                    value: 'Ingeniería de Sistemas Audiovisuales y Multimedia',
                    label: 'Ingeniería de Sistemas Audiovisuales y Multimedia',
                },
                {
                    value: 'Ingeniería de Sistemas Biológicos',
                    label: 'Ingeniería de Sistemas Biológicos',
                },
                {
                    value: 'Ingeniería de Sistemas de Información',
                    label: 'Ingeniería de Sistemas de Información',
                },
                {
                    value: 'Ingeniería de Sistemas de Inteligencia Artificial',
                    label: 'Ingeniería de Sistemas de Inteligencia Artificial',
                },
                {
                    value: 'Ingeniería de Sistemas de Telecomunicación, Sonido e Imagen',
                    label: 'Ingeniería de Sistemas de Telecomunicación, Sonido e Imagen',
                },
                {
                    value: 'Ingeniería de Sistemas en la Nube e Internet de las Cosas',
                    label: 'Ingeniería de Sistemas en la Nube e Internet de las Cosas',
                },
                {
                    value: 'Ingeniería de Sistemas Industriales',
                    label: 'Ingeniería de Sistemas Industriales',
                },
                {
                    value: 'Ingeniería de Sistemas TIC',
                    label: 'Ingeniería de Sistemas TIC',
                },
                {
                    value: 'Ingeniería de Sistemas y Servicios de Telecomunicaciones',
                    label: 'Ingeniería de Sistemas y Servicios de Telecomunicaciones',
                },
                {
                    value: 'Ingeniería de Sistemas y Tecnología Naval',
                    label: 'Ingeniería de Sistemas y Tecnología Naval',
                },
                {
                    value: 'Ingeniería de Sonido e Imagen',
                    label: 'Ingeniería de Sonido e Imagen',
                },
                {
                    value: 'Ingeniería de Sonido e Imagen en Telecomunicación',
                    label: 'Ingeniería de Sonido e Imagen en Telecomunicación',
                },
                {
                    value: 'Ingeniería de Tecnología y Diseño Textil',
                    label: 'Ingeniería de Tecnología y Diseño Textil',
                },
                {
                    value: 'Ingeniería de Tecnologías Aeroespaciales',
                    label: 'Ingeniería de Tecnologías Aeroespaciales',
                },
                {
                    value: 'Ingeniería de Tecnologías Específicas de Telecomunicación',
                    label: 'Ingeniería de Tecnologías Específicas de Telecomunicación',
                },
                {
                    value: 'Ingeniería de Tecnologías Industriales',
                    label: 'Ingeniería de Tecnologías Industriales',
                },
                {
                    value: 'Ingeniería de Tecnologías Mineras',
                    label: 'Ingeniería de Tecnologías Mineras',
                },
                {
                    value: 'Ingeniería de Tecnologías y Servicios de Telecomunicación',
                    label: 'Ingeniería de Tecnologías y Servicios de Telecomunicación',
                },
                {
                    value: 'Ingeniería del Automóvil',
                    label: 'Ingeniería del Automóvil',
                },
                {
                    value: 'Ingeniería del Medio Natural',
                    label: 'Ingeniería del Medio Natural',
                },
                {
                    value: 'Ingeniería del Software',
                    label: 'Ingeniería del Software',
                },
                {
                    value: 'Ingeniería Eléctrica',
                    label: 'Ingeniería Eléctrica',
                },
                {
                    value: 'Ingeniería Electromecánica',
                    label: 'Ingeniería Electromecánica',
                },
                {
                    value: 'Ingeniería Electrónica',
                    label: 'Ingeniería Electrónica',
                },
                {
                    value: 'Ingeniería Electrónica de Comunicaciones',
                    label: 'Ingeniería Electrónica de Comunicaciones',
                },
                {
                    value: 'Ingeniería Electrónica de Telecomunicación',
                    label: 'Ingeniería Electrónica de Telecomunicación',
                },
                {
                    value: 'Ingeniería Electrónica Industrial',
                    label: 'Ingeniería Electrónica Industrial',
                },
                {
                    value: 'Ingeniería Electrónica Industrial y Automática',
                    label: 'Ingeniería Electrónica Industrial y Automática',
                },
                {
                    value: 'Ingeniería Electrónica y Automática',
                    label: 'Ingeniería Electrónica y Automática',
                },
                {
                    value: 'Ingeniería Electrónica y Automática Industrial',
                    label: 'Ingeniería Electrónica y Automática Industrial',
                },
                {
                    value: 'Ingeniería Electrónica, Robótica y Mecatrónica',
                    label: 'Ingeniería Electrónica, Robótica y Mecatrónica',
                },
                {
                    value: 'Ingeniería en Automoción',
                    label: 'Ingeniería en Automoción',
                },
                {
                    value: 'Ingeniería en Diseño Industrial',
                    label: 'Ingeniería en Diseño Industrial',
                },
                {
                    value: 'Ingeniería en Diseño Industrial y Desarrollo del Producto',
                    label: 'Ingeniería en Diseño Industrial y Desarrollo del Producto',
                },
                {
                    value: 'Ingeniería en Diseño Mecánico',
                    label: 'Ingeniería en Diseño Mecánico',
                },
                {
                    value: 'Ingeniería en Ecotecnologías en Procesos Industriales',
                    label: 'Ingeniería en Ecotecnologías en Procesos Industriales',
                },
                {
                    value: 'Ingeniería en Electrónica Industrial',
                    label: 'Ingeniería en Electrónica Industrial',
                },
                {
                    value: 'Ingeniería en Energías Renovables y Eficiencia Energética',
                    label: 'Ingeniería en Energías Renovables y Eficiencia Energética',
                },
                {
                    value: 'Ingeniería en Explotación de Minas y Recursos Energéticos',
                    label: 'Ingeniería en Explotación de Minas y Recursos Energéticos',
                },
                {
                    value: 'Ingeniería en Geoinformación y Geomática',
                    label: 'Ingeniería en Geoinformación y Geomática',
                },
                {
                    value: 'Ingeniería en Geomática y Topografía',
                    label: 'Ingeniería en Geomática y Topografía',
                },
                {
                    value: 'Ingeniería en Industria Conectada',
                    label: 'Ingeniería en Industria Conectada',
                },
                {
                    value: 'Ingeniería en Mecatrónica',
                    label: 'Ingeniería en Mecatrónica',
                },
                {
                    value: 'Ingeniería en Organización de las Tecnologías de la Información y la Comunicación',
                    label: 'Ingeniería en Organización de las Tecnologías de la Información y la Comunicación',
                },
                {
                    value: 'Ingeniería en Organización Industrial',
                    label: 'Ingeniería en Organización Industrial',
                },
                {
                    value: 'Ingeniería en Sistemas de Información',
                    label: 'Ingeniería en Sistemas de Información',
                },
                {
                    value: 'Ingeniería en Sistemas de Telecomunicación',
                    label: 'Ingeniería en Sistemas de Telecomunicación',
                },
                {
                    value: 'Ingeniería en Sistemas Industriales',
                    label: 'Ingeniería en Sistemas Industriales',
                },
                {
                    value: 'Ingeniería en Sistemas Inteligentes',
                    label: 'Ingeniería en Sistemas Inteligentes',
                },
                {
                    value: 'Ingeniería en Sonido e Imagen en Telecomunicación',
                    label: 'Ingeniería en Sonido e Imagen en Telecomunicación',
                },
                {
                    value: 'Ingeniería en Tecnología de Telecomunicación',
                    label: 'Ingeniería en Tecnología de Telecomunicación',
                },
                {
                    value: 'Ingeniería en Tecnología Minera',
                    label: 'Ingeniería en Tecnología Minera',
                },
                {
                    value: 'Ingeniería en Tecnología Naval',
                    label: 'Ingeniería en Tecnología Naval',
                },
                {
                    value: 'Ingeniería en Tecnologías Aeroespaciales',
                    label: 'Ingeniería en Tecnologías Aeroespaciales',
                },
                {
                    value: 'Ingeniería en Tecnologías Ambientales',
                    label: 'Ingeniería en Tecnologías Ambientales',
                },
                {
                    value: 'Ingeniería en Tecnologías de la Información',
                    label: 'Ingeniería en Tecnologías de la Información',
                },
                {
                    value: 'Ingeniería en Tecnologías de la Telecomunicación',
                    label: 'Ingeniería en Tecnologías de la Telecomunicación',
                },
                {
                    value: 'Ingeniería en Tecnologías de Telecomunicación',
                    label: 'Ingeniería en Tecnologías de Telecomunicación',
                },
                {
                    value: 'Ingeniería en Tecnologías Industriales',
                    label: 'Ingeniería en Tecnologías Industriales',
                },
                {
                    value: 'Ingeniería en Tecnologías Industriales (con reserva plaza Máster)',
                    label: 'Ingeniería en Tecnologías Industriales (con reserva plaza Máster)',
                },
                {
                    value: 'Ingeniería en Tecnologías para Animación y Videojuegos',
                    label: 'Ingeniería en Tecnologías para Animación y Videojuegos',
                },
                {
                    value: 'Ingeniería en Vehículos Aeroespaciales',
                    label: 'Ingeniería en Vehículos Aeroespaciales',
                },
                {
                    value: 'Ingeniería Energética',
                    label: 'Ingeniería Energética',
                },
                { value: 'Ingeniería Física', label: 'Ingeniería Física' },
                {
                    value: 'Ingeniería Física Aplicada a la Industria',
                    label: 'Ingeniería Física Aplicada a la Industria',
                },
                {
                    value: 'Ingeniería Física y Matemática',
                    label: 'Ingeniería Física y Matemática',
                },
                { value: 'Ingeniería Forestal', label: 'Ingeniería Forestal' },
                {
                    value: 'Ingeniería Forestal y del Medio Natural',
                    label: 'Ingeniería Forestal y del Medio Natural',
                },
                {
                    value: 'Ingeniería Forestal y Medio Rural',
                    label: 'Ingeniería Forestal y Medio Rural',
                },
                {
                    value: 'Ingeniería Forestal: Industrias Forestales',
                    label: 'Ingeniería Forestal: Industrias Forestales',
                },
                {
                    value: 'Ingeniería Geológica',
                    label: 'Ingeniería Geológica',
                },
                {
                    value: 'Ingeniería Geomática',
                    label: 'Ingeniería Geomática',
                },
                {
                    value: 'Ingeniería Geomática y Topografía',
                    label: 'Ingeniería Geomática y Topografía',
                },
                {
                    value: 'Ingeniería Hortofrutícola y Jardinería',
                    label: 'Ingeniería Hortofrutícola y Jardinería',
                },
                {
                    value: 'Ingeniería Informática',
                    label: 'Ingeniería Informática',
                },
                {
                    value: 'Ingeniería Informática - Ingeniería de Computadores',
                    label: 'Ingeniería Informática - Ingeniería de Computadores',
                },
                {
                    value: 'Ingeniería Informática - Sistemas de Información',
                    label: 'Ingeniería Informática - Sistemas de Información',
                },
                {
                    value: 'Ingeniería Informática Biomédica',
                    label: 'Ingeniería Informática Biomédica',
                },
                {
                    value: 'Ingeniería Informática de Gestión y Sistemas de Información',
                    label: 'Ingeniería Informática de Gestión y Sistemas de Información',
                },
                {
                    value: 'Ingeniería Informática de Servicios y Aplicaciones',
                    label: 'Ingeniería Informática de Servicios y Aplicaciones',
                },
                {
                    value: 'Ingeniería Informática del Software',
                    label: 'Ingeniería Informática del Software',
                },
                {
                    value: 'Ingeniería Informática en Ingeniería de Computadores',
                    label: 'Ingeniería Informática en Ingeniería de Computadores',
                },
                {
                    value: 'Ingeniería Informática en Ingeniería del Software',
                    label: 'Ingeniería Informática en Ingeniería del Software',
                },
                {
                    value: 'Ingeniería Informática en Sistemas de Información',
                    label: 'Ingeniería Informática en Sistemas de Información',
                },
                {
                    value: 'Ingeniería Informática en Tecnologías de la Información',
                    label: 'Ingeniería Informática en Tecnologías de la Información',
                },
                {
                    value: 'Ingeniería Informática y Tecnologías Virtuales',
                    label: 'Ingeniería Informática y Tecnologías Virtuales',
                },
                {
                    value: 'Ingeniería Informática. Tecnologías Informáticas',
                    label: 'Ingeniería Informática. Tecnologías Informáticas',
                },
                {
                    value: 'Ingeniería Ingeniería Mecánica',
                    label: 'Ingeniería Ingeniería Mecánica',
                },
                {
                    value: 'Ingeniería Ingeniería Química',
                    label: 'Ingeniería Ingeniería Química',
                },
                { value: 'Ingeniería Marina', label: 'Ingeniería Marina' },
                { value: 'Ingeniería Marítima', label: 'Ingeniería Marítima' },
                {
                    value: 'Ingeniería Matemática',
                    label: 'Ingeniería Matemática',
                },
                {
                    value: 'Ingeniería Matemática Aplicada al Análisis de Datos',
                    label: 'Ingeniería Matemática Aplicada al Análisis de Datos',
                },
                {
                    value: 'Ingeniería Matemática e Inteligencia Artificial',
                    label: 'Ingeniería Matemática e Inteligencia Artificial',
                },
                {
                    value: 'Ingeniería Matemática en Ciencia de Datos',
                    label: 'Ingeniería Matemática en Ciencia de Datos',
                },
                {
                    value: 'Ingeniería Matemática y Física',
                    label: 'Ingeniería Matemática y Física',
                },
                { value: 'Ingeniería Mecánica', label: 'Ingeniería Mecánica' },
                {
                    value: 'Ingeniería Mecatrónica y Robótica',
                    label: 'Ingeniería Mecatrónica y Robótica',
                },
                { value: 'Ingeniería Minera', label: 'Ingeniería Minera' },
                {
                    value: 'Ingeniería Minera y Energética',
                    label: 'Ingeniería Minera y Energética',
                },
                {
                    value: 'Ingeniería Multimedia',
                    label: 'Ingeniería Multimedia',
                },
                {
                    value: 'Ingeniería Náutica y Transporte Marítimo',
                    label: 'Ingeniería Náutica y Transporte Marítimo',
                },
                {
                    value: 'Ingeniería Naval y Oceánica',
                    label: 'Ingeniería Naval y Oceánica',
                },
                { value: 'Ingeniería Química', label: 'Ingeniería Química' },
                {
                    value: 'Ingeniería Química Industrial',
                    label: 'Ingeniería Química Industrial',
                },
                {
                    value: 'Ingeniería Radioelectrónica',
                    label: 'Ingeniería Radioelectrónica',
                },
                { value: 'Ingeniería Robótica', label: 'Ingeniería Robótica' },
                {
                    value: 'Ingeniería Robótica e Inteligencia Artificial',
                    label: 'Ingeniería Robótica e Inteligencia Artificial',
                },
                {
                    value: 'Ingeniería Robótica Software',
                    label: 'Ingeniería Robótica Software',
                },
                {
                    value: 'Ingeniería Telemática',
                    label: 'Ingeniería Telemática',
                },
                {
                    value: 'Ingeniería Telemática en Telecomunicación',
                    label: 'Ingeniería Telemática en Telecomunicación',
                },
                { value: 'Ingeniería Térmica', label: 'Ingeniería Térmica' },
                {
                    value: 'Ingeniería y Gestión Empresarial',
                    label: 'Ingeniería y Gestión Empresarial',
                },
                {
                    value: 'Ingeniería y Sistemas de Datos',
                    label: 'Ingeniería y Sistemas de Datos',
                },
                {
                    value: 'Innovación y Seguridad Alimentaria',
                    label: 'Innovación y Seguridad Alimentaria',
                },
                {
                    value: 'Inteligencia Artificial',
                    label: 'Inteligencia Artificial',
                },
                {
                    value: 'Inteligencia Robótica',
                    label: 'Inteligencia Robótica',
                },
                { value: 'Máquinas Navales', label: 'Máquinas Navales' },
                { value: 'Marina', label: 'Marina' },
                {
                    value: 'Marina Civil. Ingeniería Náutica y Transporte Marítimo',
                    label: 'Marina Civil. Ingeniería Náutica y Transporte Marítimo',
                },
                {
                    value: 'Matemática Aplicada y Computación',
                    label: 'Matemática Aplicada y Computación',
                },
                {
                    value: 'Matemática Computacional',
                    label: 'Matemática Computacional',
                },
                {
                    value: 'Matemáticas e Informática',
                    label: 'Matemáticas e Informática',
                },
                {
                    value: 'Matemáticas y Ciencia de Datos',
                    label: 'Matemáticas y Ciencia de Datos',
                },
                { value: 'Multimedia', label: 'Multimedia' },
                {
                    value: 'Multimedia y Artes Digitales',
                    label: 'Multimedia y Artes Digitales',
                },
                {
                    value: 'Multimedia, Aplicaciones y Videojuegos',
                    label: 'Multimedia, Aplicaciones y Videojuegos',
                },
                {
                    value: 'Náutica y Transporte Marítimo',
                    label: 'Náutica y Transporte Marítimo',
                },
                { value: 'Paisaje', label: 'Paisaje' },
                { value: 'Paisajismo', label: 'Paisajismo' },
                {
                    value: 'Piloto de Aviación Comercial y Operaciones Aéreas',
                    label: 'Piloto de Aviación Comercial y Operaciones Aéreas',
                },
                { value: 'Recursos Hídricos', label: 'Recursos Hídricos' },
                { value: 'Robótica', label: 'Robótica' },
                {
                    value: 'Sistemas de Información',
                    label: 'Sistemas de Información',
                },
                {
                    value: 'Técnicas de Aplicaciones de Software',
                    label: 'Técnicas de Aplicaciones de Software',
                },
                {
                    value: 'Técnicas de Interacción Digital y Multimedia',
                    label: 'Técnicas de Interacción Digital y Multimedia',
                },
                {
                    value: 'Tecnología Digital y Multimedia',
                    label: 'Tecnología Digital y Multimedia',
                },
                {
                    value: 'Tecnologías de Ingeniería Civil',
                    label: 'Tecnologías de Ingeniería Civil',
                },
                {
                    value: 'Tecnologías Digitales para la Empresa',
                    label: 'Tecnologías Digitales para la Empresa',
                },
                {
                    value: 'Tecnologías Industriales y Análisis Económico',
                    label: 'Tecnologías Industriales y Análisis Económico',
                },
                {
                    value: 'Tecnologías Interactivas',
                    label: 'Tecnologías Interactivas',
                },
                { value: 'Tecnologías Marinas', label: 'Tecnologías Marinas' },
                {
                    value: 'Tecnologías para la Sociedad de la Información',
                    label: 'Tecnologías para la Sociedad de la Información',
                },
            ],
        },

        // Grupo: Dobles Grados
        {
            label: 'Dobles Grados',
            options: [
                {
                    value: 'ADE + Ciencia de Datos',
                    label: 'ADE + Ciencia de Datos',
                },
                {
                    value: 'ADE + Datos y Analítica de Negocio',
                    label: 'ADE + Datos y Analítica de Negocio',
                },
                { value: 'ADE + Derecho', label: 'ADE + Derecho' },
                {
                    value: 'ADE + Publicidad y Marketing Digital',
                    label: 'ADE + Publicidad y Marketing Digital',
                },
                { value: 'ADE + Química', label: 'ADE + Química' },
                {
                    value: 'Administración de Empresas + Computación e Inteligencia Artificial',
                    label: 'Administración de Empresas + Computación e Inteligencia Artificial',
                },
                {
                    value: 'Administración de Empresas + Datos y Analítica de Negocio',
                    label: 'Administración de Empresas + Datos y Analítica de Negocio',
                },
                {
                    value: 'Administración de Empresas + Derecho',
                    label: 'Administración de Empresas + Derecho',
                },
                {
                    value: 'Administración de Empresas + Diseño',
                    label: 'Administración de Empresas + Diseño',
                },
                {
                    value: 'Administración de Empresas + Diseño de Moda',
                    label: 'Administración de Empresas + Diseño de Moda',
                },
                {
                    value: 'Administración de Empresas + Humanidades',
                    label: 'Administración de Empresas + Humanidades',
                },
                {
                    value: 'Administración de Empresas + Relaciones Internacionales',
                    label: 'Administración de Empresas + Relaciones Internacionales',
                },
                {
                    value: 'Administración de Empresas y Gestión de la Innovación + Marketing y Comunidades Digitales',
                    label: 'Administración de Empresas y Gestión de la Innovación + Marketing y Comunidades Digitales',
                },
                {
                    value: 'Administración de Empresas y Gestión de la Innovación + Turismo y Gestión del Ocio',
                    label: 'Administración de Empresas y Gestión de la Innovación + Turismo y Gestión del Ocio',
                },
                {
                    value: 'Administración y Dirección de Empresas + Análisis de Negocios',
                    label: 'Administración y Dirección de Empresas + Análisis de Negocios',
                },
                {
                    value: 'Administración y Dirección de Empresas + Análisis de Negocios / Business Analytics',
                    label: 'Administración y Dirección de Empresas + Análisis de Negocios / Business Analytics',
                },
                {
                    value: 'Administración y Dirección de Empresas + Ciencia y Tecnología de los Alimentos',
                    label: 'Administración y Dirección de Empresas + Ciencia y Tecnología de los Alimentos',
                },
                {
                    value: 'Administración y Dirección de Empresas + Ciencia, Gestión e Ingeniería de Servicios',
                    label: 'Administración y Dirección de Empresas + Ciencia, Gestión e Ingeniería de Servicios',
                },
                {
                    value: 'Administración y Dirección de Empresas + Derecho',
                    label: 'Administración y Dirección de Empresas + Derecho',
                },
                {
                    value: 'Administración y Dirección de empresas + Dirección Comercial y Marketing',
                    label: 'Administración y Dirección de empresas + Dirección Comercial y Marketing',
                },
                {
                    value: 'Administración y Dirección de Empresas + Economía',
                    label: 'Administración y Dirección de Empresas + Economía',
                },
                {
                    value: 'Administración y Dirección de Empresas + Emprendimiento',
                    label: 'Administración y Dirección de Empresas + Emprendimiento',
                },
                {
                    value: 'Administración y Dirección de Empresas + Estudios Internacionales',
                    label: 'Administración y Dirección de Empresas + Estudios Internacionales',
                },
                {
                    value: 'Administración y Dirección de Empresas + Finanzas',
                    label: 'Administración y Dirección de Empresas + Finanzas',
                },
                {
                    value: 'Administración y Dirección de Empresas + Finanzas y Contabilidad',
                    label: 'Administración y Dirección de Empresas + Finanzas y Contabilidad',
                },
                {
                    value: 'Administración y Dirección de Empresas + Gastronomía e Innovación Culinaria',
                    label: 'Administración y Dirección de Empresas + Gastronomía e Innovación Culinaria',
                },
                {
                    value: 'Administración y Dirección de Empresas + Ingeniería de la Producción Industrial',
                    label: 'Administración y Dirección de Empresas + Ingeniería de la Producción Industrial',
                },
                {
                    value: 'Administración y Dirección de Empresas + Ingeniería de Organización Industrial',
                    label: 'Administración y Dirección de Empresas + Ingeniería de Organización Industrial',
                },
                {
                    value: 'Administración y Dirección de Empresas + Ingeniería de Tecnologías y Servicios de Telecomunicación',
                    label: 'Administración y Dirección de Empresas + Ingeniería de Tecnologías y Servicios de Telecomunicación',
                },
                {
                    value: 'Administración y Dirección de Empresas + Ingeniería en Organización Industrial y Logística',
                    label: 'Administración y Dirección de Empresas + Ingeniería en Organización Industrial y Logística',
                },
                {
                    value: 'Administración y Dirección de Empresas + Ingeniería en Tecnologías Industriales',
                    label: 'Administración y Dirección de Empresas + Ingeniería en Tecnologías Industriales',
                },
                {
                    value: 'Administración y Dirección de Empresas + Ingeniería Informática',
                    label: 'Administración y Dirección de Empresas + Ingeniería Informática',
                },
                {
                    value: 'Administración y Dirección de Empresas + Ingeniería Informática de Gestión y Sistemas de Información',
                    label: 'Administración y Dirección de Empresas + Ingeniería Informática de Gestión y Sistemas de Información',
                },
                {
                    value: 'Administración y Dirección de Empresas + Ingeniería Informática en Ingeniería de Computadores',
                    label: 'Administración y Dirección de Empresas + Ingeniería Informática en Ingeniería de Computadores',
                },
                {
                    value: 'Administración y Dirección de Empresas + Ingeniería Informática en Ingeniería del Software',
                    label: 'Administración y Dirección de Empresas + Ingeniería Informática en Ingeniería del Software',
                },
                {
                    value: 'Administración y Dirección de Empresas + Marketing',
                    label: 'Administración y Dirección de Empresas + Marketing',
                },
                {
                    value: 'Administración y Dirección de Empresas + Marketing y Comunicación Digital',
                    label: 'Administración y Dirección de Empresas + Marketing y Comunicación Digital',
                },
                {
                    value: 'Administración y Dirección de Empresas + Matemáticas',
                    label: 'Administración y Dirección de Empresas + Matemáticas',
                },
                {
                    value: 'Administración y Dirección de Empresas + Psicología',
                    label: 'Administración y Dirección de Empresas + Psicología',
                },
                {
                    value: 'Administración y Dirección de Empresas + Publicidad y Relaciones Públicas',
                    label: 'Administración y Dirección de Empresas + Publicidad y Relaciones Públicas',
                },
                {
                    value: 'Administración y Dirección de Empresas + Química',
                    label: 'Administración y Dirección de Empresas + Química',
                },
                {
                    value: 'Administración y Dirección de Empresas + Relaciones Internacionales',
                    label: 'Administración y Dirección de Empresas + Relaciones Internacionales',
                },
                {
                    value: 'Administración y Dirección de Empresas + Relaciones Laborales',
                    label: 'Administración y Dirección de Empresas + Relaciones Laborales',
                },
                {
                    value: 'Administración y Dirección de Empresas + Relaciones Laborales y Recursos Humanos',
                    label: 'Administración y Dirección de Empresas + Relaciones Laborales y Recursos Humanos',
                },
                {
                    value: 'Administración y Dirección de Empresas + Sociología',
                    label: 'Administración y Dirección de Empresas + Sociología',
                },
                {
                    value: 'Administración y Dirección de Empresas + Traducción e Interpretación',
                    label: 'Administración y Dirección de Empresas + Traducción e Interpretación',
                },
                {
                    value: 'Administración y Dirección de Empresas + Turismo',
                    label: 'Administración y Dirección de Empresas + Turismo',
                },
                {
                    value: 'Administración y Dirección de Empresas Internacional + Derecho',
                    label: 'Administración y Dirección de Empresas Internacional + Derecho',
                },
                {
                    value: 'Administración y Dirección de Empresas Tecnológicas + Ingeniería Informática',
                    label: 'Administración y Dirección de Empresas Tecnológicas + Ingeniería Informática',
                },
                {
                    value: 'Análisis de Negocios / Business Analytics + Administración y Dirección de Empresas',
                    label: 'Análisis de Negocios / Business Analytics + Administración y Dirección de Empresas',
                },
                {
                    value: 'Análisis de Negocios / Business Analytics + Derecho',
                    label: 'Análisis de Negocios / Business Analytics + Derecho',
                },
                {
                    value: 'Análisis de Negocios / Business Analytics + Relaciones Internacionales',
                    label: 'Análisis de Negocios / Business Analytics + Relaciones Internacionales',
                },
                {
                    value: 'Análisis de Negocios / Business Analytics y Administración + Ingeniería Informática',
                    label: 'Análisis de Negocios / Business Analytics y Administración + Ingeniería Informática',
                },
                {
                    value: 'Análisis de Negocios + Dirección Internacional de Negocios',
                    label: 'Análisis de Negocios + Dirección Internacional de Negocios',
                },
                {
                    value: 'Analítica de Negocios / Business Analytics + Administración y Dirección de Empresas',
                    label: 'Analítica de Negocios / Business Analytics + Administración y Dirección de Empresas',
                },
                {
                    value: 'Animación + Diseño de Videojuegos',
                    label: 'Animación + Diseño de Videojuegos',
                },
                {
                    value: 'Antropología + Filosofía',
                    label: 'Antropología + Filosofía',
                },
                {
                    value: 'Arqueología + Historia',
                    label: 'Arqueología + Historia',
                },
                {
                    value: 'Arquitectura + Diseño Digital y Tecnologías Creativas',
                    label: 'Arquitectura + Diseño Digital y Tecnologías Creativas',
                },
                {
                    value: 'Arte Digital + Ingeniería en Tecnologías para Animación y Videojuegos',
                    label: 'Arte Digital + Ingeniería en Tecnologías para Animación y Videojuegos',
                },
                {
                    value: 'Artes Escénicas + Comunicación Audiovisual',
                    label: 'Artes Escénicas + Comunicación Audiovisual',
                },
                {
                    value: 'Bellas Artes + Diseño',
                    label: 'Bellas Artes + Diseño',
                },
                {
                    value: 'Bellas Artes + Diseño de Moda',
                    label: 'Bellas Artes + Diseño de Moda',
                },
                {
                    value: 'Bellas Artes + Diseño Digital y Multimedia',
                    label: 'Bellas Artes + Diseño Digital y Multimedia',
                },
                {
                    value: 'Bellas Artes + Diseño Integral y Gestión de la Imagen',
                    label: 'Bellas Artes + Diseño Integral y Gestión de la Imagen',
                },
                {
                    value: 'Bellas Artes + Turismo',
                    label: 'Bellas Artes + Turismo',
                },
                {
                    value: 'Bioinformática + Farmacia',
                    label: 'Bioinformática + Farmacia',
                },
                {
                    value: 'Biología + Biotecnología',
                    label: 'Biología + Biotecnología',
                },
                {
                    value: 'Biología + Ciencias Ambientales',
                    label: 'Biología + Ciencias Ambientales',
                },
                { value: 'Biología + Química', label: 'Biología + Química' },
                {
                    value: 'Biotecnología + Administración y Dirección de Empresas',
                    label: 'Biotecnología + Administración y Dirección de Empresas',
                },
                {
                    value: 'Biotecnología + Bioquímica y Biología Molecular',
                    label: 'Biotecnología + Bioquímica y Biología Molecular',
                },
                {
                    value: 'Biotecnología + Farmacia',
                    label: 'Biotecnología + Farmacia',
                },
                {
                    value: 'Biotecnología + Ingeniería Agroalimentaria y del Medio Rural',
                    label: 'Biotecnología + Ingeniería Agroalimentaria y del Medio Rural',
                },
                {
                    value: 'Business Analytics + Administración y Dirección de Empresas',
                    label: 'Business Analytics + Administración y Dirección de Empresas',
                },
                {
                    value: 'Business + Economics',
                    label: 'Business + Economics',
                },
                {
                    value: 'Business Intelligence + Administración y Dirección de Empresas',
                    label: 'Business Intelligence + Administración y Dirección de Empresas',
                },
                {
                    value: 'Ciencia de Datos + Administración y Dirección de Empresas',
                    label: 'Ciencia de Datos + Administración y Dirección de Empresas',
                },
                {
                    value: 'Ciencia de Datos + Biotecnología',
                    label: 'Ciencia de Datos + Biotecnología',
                },
                {
                    value: 'Ciencia de Datos e Inteligencia Artificial + Ingeniería Informática',
                    label: 'Ciencia de Datos e Inteligencia Artificial + Ingeniería Informática',
                },
                {
                    value: 'Ciencia e Ingeniería de Datos + Ingeniería de Sistemas de Información',
                    label: 'Ciencia e Ingeniería de Datos + Ingeniería de Sistemas de Información',
                },
                {
                    value: 'Ciencia e Ingeniería de Datos + Ingeniería en Tecnologías de Telecomunicación',
                    label: 'Ciencia e Ingeniería de Datos + Ingeniería en Tecnologías de Telecomunicación',
                },
                {
                    value: 'Ciencia Política y Gestión Pública + Derecho',
                    label: 'Ciencia Política y Gestión Pública + Derecho',
                },
                {
                    value: 'Ciencia Política y Gestión Pública + Economía',
                    label: 'Ciencia Política y Gestión Pública + Economía',
                },
                {
                    value: 'Ciencia Política y Gestión Pública + Periodismo',
                    label: 'Ciencia Política y Gestión Pública + Periodismo',
                },
                {
                    value: 'Ciencia Política y Gestión Pública + Sociología',
                    label: 'Ciencia Política y Gestión Pública + Sociología',
                },
                {
                    value: 'Ciencia y Tecnología de los Alimentos + Gastronomía',
                    label: 'Ciencia y Tecnología de los Alimentos + Gastronomía',
                },
                {
                    value: 'Ciencia, Gestión e Ingeniería de Servicios + Ingeniería en Organización Industrial',
                    label: 'Ciencia, Gestión e Ingeniería de Servicios + Ingeniería en Organización Industrial',
                },
                {
                    value: 'Ciencia, Gestión e Ingeniería de Servicios + Marketing',
                    label: 'Ciencia, Gestión e Ingeniería de Servicios + Marketing',
                },
                {
                    value: 'Ciencia, Gestión e Ingeniería de Servicios + Turismo',
                    label: 'Ciencia, Gestión e Ingeniería de Servicios + Turismo',
                },
                {
                    value: 'Ciencias Ambientales + Ciencias del Mar',
                    label: 'Ciencias Ambientales + Ciencias del Mar',
                },
                {
                    value: 'Ciencias Ambientales + Geografía e Historia',
                    label: 'Ciencias Ambientales + Geografía e Historia',
                },
                {
                    value: 'Ciencias Ambientales + Geología',
                    label: 'Ciencias Ambientales + Geología',
                },
                {
                    value: 'Ciencias Ambientales + Ingeniería Forestal y del Medio Rural',
                    label: 'Ciencias Ambientales + Ingeniería Forestal y del Medio Rural',
                },
                {
                    value: 'Ciencias Ambientales + Ingeniería Forestal y Medio Natural',
                    label: 'Ciencias Ambientales + Ingeniería Forestal y Medio Natural',
                },
                {
                    value: 'Ciencias Ambientales y Geografía + Ordenación del Territorio',
                    label: 'Ciencias Ambientales y Geografía + Ordenación del Territorio',
                },
                {
                    value: 'Ciencias de Datos + Ingeniería en Organización Industrial',
                    label: 'Ciencias de Datos + Ingeniería en Organización Industrial',
                },
                {
                    value: 'Ciencias de la Actividad Física y del Deporte + Educación Primaria',
                    label: 'Ciencias de la Actividad Física y del Deporte + Educación Primaria',
                },
                {
                    value: 'Ciencias de la Actividad Física y del Deporte + Fisioterapia',
                    label: 'Ciencias de la Actividad Física y del Deporte + Fisioterapia',
                },
                {
                    value: 'Ciencias de la Actividad Física y del Deporte + Maestro en Educación Primaria',
                    label: 'Ciencias de la Actividad Física y del Deporte + Maestro en Educación Primaria',
                },
                {
                    value: 'Ciencias de la Actividad Física y del Deporte + Nutrición Humana y Dietética',
                    label: 'Ciencias de la Actividad Física y del Deporte + Nutrición Humana y Dietética',
                },
                {
                    value: 'Ciencias del Mar + Biotecnología',
                    label: 'Ciencias del Mar + Biotecnología',
                },
                {
                    value: 'Ciencias del Mar + Ciencias Ambientales',
                    label: 'Ciencias del Mar + Ciencias Ambientales',
                },
                {
                    value: 'Ciencias Empresariales + Turismo',
                    label: 'Ciencias Empresariales + Turismo',
                },
                {
                    value: 'Ciencias Políticas + Dirección de Empresas',
                    label: 'Ciencias Políticas + Dirección de Empresas',
                },
                {
                    value: 'Ciencias Políticas + Filosofía',
                    label: 'Ciencias Políticas + Filosofía',
                },
                {
                    value: 'Ciencias Políticas + Relaciones Internacionales',
                    label: 'Ciencias Políticas + Relaciones Internacionales',
                },
                {
                    value: 'Ciencias Políticas y de la Administración + Periodismo',
                    label: 'Ciencias Políticas y de la Administración + Periodismo',
                },
                {
                    value: 'Ciencias Políticas y de la Administración + Sociología',
                    label: 'Ciencias Políticas y de la Administración + Sociología',
                },
                {
                    value: 'Ciencias Políticas y Gestión Pública + Administración y Dirección de Empresas',
                    label: 'Ciencias Políticas y Gestión Pública + Administración y Dirección de Empresas',
                },
                {
                    value: 'Ciencias Políticas y Gestión Pública + Derecho',
                    label: 'Ciencias Políticas y Gestión Pública + Derecho',
                },
                {
                    value: 'Ciencias Políticas y Relaciones Internacionales + Periodismo',
                    label: 'Ciencias Políticas y Relaciones Internacionales + Periodismo',
                },
                {
                    value: 'Ciencias Políticas y Relaciones Internacionales + Publicidad y Relaciones Públicas',
                    label: 'Ciencias Políticas y Relaciones Internacionales + Publicidad y Relaciones Públicas',
                },
                {
                    value: 'Comercio + Relaciones Laborales y Recursos Humanos',
                    label: 'Comercio + Relaciones Laborales y Recursos Humanos',
                },
                {
                    value: 'Comunicación + Comunicación Digital',
                    label: 'Comunicación + Comunicación Digital',
                },
                {
                    value: 'Comunicación Audiovisual + Administración y Dirección de Empresas',
                    label: 'Comunicación Audiovisual + Administración y Dirección de Empresas',
                },
                {
                    value: 'Comunicación Audiovisual + Artes Escénicas y Cinematográficas',
                    label: 'Comunicación Audiovisual + Artes Escénicas y Cinematográficas',
                },
                {
                    value: 'Comunicación Audiovisual + Cine y Ficción Audiovisual',
                    label: 'Comunicación Audiovisual + Cine y Ficción Audiovisual',
                },
                {
                    value: 'Comunicación Audiovisual + Diseño Digital y Multimedia',
                    label: 'Comunicación Audiovisual + Diseño Digital y Multimedia',
                },
                {
                    value: 'Comunicación Audiovisual + Gestión de Información y Documentación Digital',
                    label: 'Comunicación Audiovisual + Gestión de Información y Documentación Digital',
                },
                {
                    value: 'Comunicación Audiovisual + Gestión de la Comunicación',
                    label: 'Comunicación Audiovisual + Gestión de la Comunicación',
                },
                {
                    value: 'Comunicación Audiovisual + Información y Documentación',
                    label: 'Comunicación Audiovisual + Información y Documentación',
                },
                {
                    value: 'Comunicación Audiovisual + Periodismo',
                    label: 'Comunicación Audiovisual + Periodismo',
                },
                {
                    value: 'Comunicación Audiovisual + Publicidad',
                    label: 'Comunicación Audiovisual + Publicidad',
                },
                {
                    value: 'Comunicación Audiovisual + Publicidad y Relaciones Públicas',
                    label: 'Comunicación Audiovisual + Publicidad y Relaciones Públicas',
                },
                {
                    value: 'Comunicación Audiovisual y Nuevos Medios + Publicidad Creativa',
                    label: 'Comunicación Audiovisual y Nuevos Medios + Publicidad Creativa',
                },
                {
                    value: 'Comunicación Digital + Comunicación Audiovisual',
                    label: 'Comunicación Digital + Comunicación Audiovisual',
                },
                {
                    value: 'Comunicación Digital + Periodismo',
                    label: 'Comunicación Digital + Periodismo',
                },
                {
                    value: 'Comunicación Digital + Publicidad y Relaciones Públicas',
                    label: 'Comunicación Digital + Publicidad y Relaciones Públicas',
                },
                {
                    value: 'Contabilidad y Finanzas + Relaciones Laborales y Recursos Humanos',
                    label: 'Contabilidad y Finanzas + Relaciones Laborales y Recursos Humanos',
                },
                {
                    value: 'Contabilidad y Finanzas + Turismo',
                    label: 'Contabilidad y Finanzas + Turismo',
                },
                {
                    value: 'Creación, Administración y Dirección de Empresas + Análisis de Negocios',
                    label: 'Creación, Administración y Dirección de Empresas + Análisis de Negocios',
                },
                {
                    value: 'Creación, Administración y Dirección de Empresas + Marketing',
                    label: 'Creación, Administración y Dirección de Empresas + Marketing',
                },
                {
                    value: 'Creación, Administración y Dirección de Empresas + Psicología',
                    label: 'Creación, Administración y Dirección de Empresas + Psicología',
                },
                {
                    value: 'Creación, Administración y Dirección de Empresas + Relaciones Internacionales',
                    label: 'Creación, Administración y Dirección de Empresas + Relaciones Internacionales',
                },
                {
                    value: 'Creación, Administración y Dirección de Empresas + Turismo',
                    label: 'Creación, Administración y Dirección de Empresas + Turismo',
                },
                {
                    value: 'Criminología + Ciencias de la Seguridad',
                    label: 'Criminología + Ciencias de la Seguridad',
                },
                {
                    value: 'Criminología + Derecho',
                    label: 'Criminología + Derecho',
                },
                {
                    value: 'Criminología + Ingeniería Informática',
                    label: 'Criminología + Ingeniería Informática',
                },
                {
                    value: 'Criminología + Políticas Públicas de Prevención y Derecho',
                    label: 'Criminología + Políticas Públicas de Prevención y Derecho',
                },
                {
                    value: 'Criminología + Psicología',
                    label: 'Criminología + Psicología',
                },
                {
                    value: 'Criminología + Seguridad',
                    label: 'Criminología + Seguridad',
                },
                {
                    value: 'Criminología + Trabajo Social',
                    label: 'Criminología + Trabajo Social',
                },
                {
                    value: 'Criminología y Seguridad + Derecho',
                    label: 'Criminología y Seguridad + Derecho',
                },
                {
                    value: 'Derecho + Administración de Empresas',
                    label: 'Derecho + Administración de Empresas',
                },
                {
                    value: 'Derecho + Administración y Dirección de Empresas',
                    label: 'Derecho + Administración y Dirección de Empresas',
                },
                {
                    value: 'Derecho + Ciencia Política y Administración Pública',
                    label: 'Derecho + Ciencia Política y Administración Pública',
                },
                {
                    value: 'Derecho + Ciencia Política y Gestión Pública',
                    label: 'Derecho + Ciencia Política y Gestión Pública',
                },
                {
                    value: 'Derecho + Ciencias Criminológicas y de la Seguridad',
                    label: 'Derecho + Ciencias Criminológicas y de la Seguridad',
                },
                {
                    value: 'Derecho + Ciencias de la Seguridad',
                    label: 'Derecho + Ciencias de la Seguridad',
                },
                {
                    value: 'Derecho + Ciencias Políticas',
                    label: 'Derecho + Ciencias Políticas',
                },
                {
                    value: 'Derecho + Ciencias Políticas y de la Administración',
                    label: 'Derecho + Ciencias Políticas y de la Administración',
                },
                {
                    value: 'Derecho + Ciencias Políticas y de la Administración Pública',
                    label: 'Derecho + Ciencias Políticas y de la Administración Pública',
                },
                {
                    value: 'Derecho + Creación Administración y Dirección de Empresas',
                    label: 'Derecho + Creación Administración y Dirección de Empresas',
                },
                {
                    value: 'Derecho + Criminología',
                    label: 'Derecho + Criminología',
                },
                {
                    value: 'Derecho + Criminología y Seguridad',
                    label: 'Derecho + Criminología y Seguridad',
                },
                {
                    value: 'Derecho + Dirección de Empresas',
                    label: 'Derecho + Dirección de Empresas',
                },
                {
                    value: 'Derecho + Dirección Internacional de Negocios',
                    label: 'Derecho + Dirección Internacional de Negocios',
                },
                { value: 'Derecho + Economía', label: 'Derecho + Economía' },
                {
                    value: 'Derecho + Estudios Internacionales',
                    label: 'Derecho + Estudios Internacionales',
                },
                {
                    value: 'Derecho + Estudios Jurídico Militares',
                    label: 'Derecho + Estudios Jurídico Militares',
                },
                { value: 'Derecho + Filosofía', label: 'Derecho + Filosofía' },
                {
                    value: 'Derecho + Filosofía, Política y Economía',
                    label: 'Derecho + Filosofía, Política y Economía',
                },
                {
                    value: 'Derecho + Finanzas y Contabilidad',
                    label: 'Derecho + Finanzas y Contabilidad',
                },
                {
                    value: 'Derecho + Gestión y Administración Pública',
                    label: 'Derecho + Gestión y Administración Pública',
                },
                {
                    value: 'Derecho + Global Governance, Economics & Legal Order',
                    label: 'Derecho + Global Governance, Economics & Legal Order',
                },
                {
                    value: 'Derecho + International Studies',
                    label: 'Derecho + International Studies',
                },
                {
                    value: 'Derecho + Periodismo',
                    label: 'Derecho + Periodismo',
                },
                {
                    value: 'Derecho + Publicidad y Relaciones Públicas',
                    label: 'Derecho + Publicidad y Relaciones Públicas',
                },
                {
                    value: 'Derecho + Relaciones Internacionales',
                    label: 'Derecho + Relaciones Internacionales',
                },
                {
                    value: 'Derecho + Relaciones Internacionales y Unión Europea',
                    label: 'Derecho + Relaciones Internacionales y Unión Europea',
                },
                {
                    value: 'Derecho + Relaciones Laborales',
                    label: 'Derecho + Relaciones Laborales',
                },
                {
                    value: 'Derecho + Relaciones Laborales y Recursos Humanos',
                    label: 'Derecho + Relaciones Laborales y Recursos Humanos',
                },
                { value: 'Derecho + Seguridad', label: 'Derecho + Seguridad' },
                {
                    value: 'Dirección de Empresas + Derecho',
                    label: 'Dirección de Empresas + Derecho',
                },
                {
                    value: 'Dirección de Empresas + Economía y Gestión',
                    label: 'Dirección de Empresas + Economía y Gestión',
                },
                {
                    value: 'Dirección de Empresas + Global Governance, Economics & Legal Order',
                    label: 'Dirección de Empresas + Global Governance, Economics & Legal Order',
                },
                {
                    value: 'Dirección de Empresas + Inteligencia de Negocios',
                    label: 'Dirección de Empresas + Inteligencia de Negocios',
                },
                {
                    value: 'Dirección Internacional de Negocios + Relaciones Internacionales',
                    label: 'Dirección Internacional de Negocios + Relaciones Internacionales',
                },
                {
                    value: 'Dirección y Creación de Empresas + Derecho',
                    label: 'Dirección y Creación de Empresas + Derecho',
                },
                {
                    value: 'Dirección y Creación de Empresas + Dirección Internacional de Empresas de Turismo y Ocio',
                    label: 'Dirección y Creación de Empresas + Dirección Internacional de Empresas de Turismo y Ocio',
                },
                {
                    value: 'Dirección y Creación de Empresas + Marketing y Dirección Comercial',
                    label: 'Dirección y Creación de Empresas + Marketing y Dirección Comercial',
                },
                { value: 'Diseño + Publicidad', label: 'Diseño + Publicidad' },
                {
                    value: 'Diseño de Moda + Comercio',
                    label: 'Diseño de Moda + Comercio',
                },
                {
                    value: 'Diseño de Videojuegos + Ingeniería Informática',
                    label: 'Diseño de Videojuegos + Ingeniería Informática',
                },
                {
                    value: 'Diseño y Desarrollo de Videojuegos + Ingeniería de Computadores',
                    label: 'Diseño y Desarrollo de Videojuegos + Ingeniería de Computadores',
                },
                {
                    value: 'Diseño y Gestión de Moda + Bellas Artes',
                    label: 'Diseño y Gestión de Moda + Bellas Artes',
                },
                {
                    value: 'Diseño y Gestión de Moda + Diseño Integral y Gestión de la Imagen',
                    label: 'Diseño y Gestión de Moda + Diseño Integral y Gestión de la Imagen',
                },
                {
                    value: 'Diseño y Producción de Videojuegos + Ingeniería Informática de Gestión y Sistemas de Información',
                    label: 'Diseño y Producción de Videojuegos + Ingeniería Informática de Gestión y Sistemas de Información',
                },
                {
                    value: 'Economía / Economics + Derecho',
                    label: 'Economía / Economics + Derecho',
                },
                {
                    value: 'Economía + Administración y Dirección de Empresas',
                    label: 'Economía + Administración y Dirección de Empresas',
                },
                {
                    value: 'Economía + Datos y Analítica de Negocio',
                    label: 'Economía + Datos y Analítica de Negocio',
                },
                { value: 'Economía + Derecho', label: 'Economía + Derecho' },
                {
                    value: 'Economía + Estadística',
                    label: 'Economía + Estadística',
                },
                {
                    value: 'Economía + Estudios Urbanos',
                    label: 'Economía + Estudios Urbanos',
                },
                {
                    value: 'Economía + Filosofía',
                    label: 'Economía + Filosofía',
                },
                {
                    value: 'Economía + Finanzas y Contabilidad',
                    label: 'Economía + Finanzas y Contabilidad',
                },
                { value: 'Economía + Historia', label: 'Economía + Historia' },
                {
                    value: 'Economía + Ingeniería Informática',
                    label: 'Economía + Ingeniería Informática',
                },
                {
                    value: 'Economía + Ingeniería Matemática',
                    label: 'Economía + Ingeniería Matemática',
                },
                {
                    value: 'Economía + Matemática Aplicada',
                    label: 'Economía + Matemática Aplicada',
                },
                {
                    value: 'Economía + Matemáticas',
                    label: 'Economía + Matemáticas',
                },
                {
                    value: 'Economía + Matemáticas y Ciencia de Datos',
                    label: 'Economía + Matemáticas y Ciencia de Datos',
                },
                {
                    value: 'Economía + Periodismo',
                    label: 'Economía + Periodismo',
                },
                {
                    value: 'Economía + Relaciones Internacionales',
                    label: 'Economía + Relaciones Internacionales',
                },
                {
                    value: 'Economía + Relaciones Internacionales y Unión Europea',
                    label: 'Economía + Relaciones Internacionales y Unión Europea',
                },
                { value: 'Economía + Turismo', label: 'Economía + Turismo' },
                {
                    value: 'Economía Financiera y Actuarial + Administración y Dirección de Empresas',
                    label: 'Economía Financiera y Actuarial + Administración y Dirección de Empresas',
                },
                {
                    value: 'Economía Financiera y Actuarial + Economía',
                    label: 'Economía Financiera y Actuarial + Economía',
                },
                {
                    value: 'Economía y Negocios Internacionales + Análisis de Negocios',
                    label: 'Economía y Negocios Internacionales + Análisis de Negocios',
                },
                {
                    value: 'Economía y Negocios Internacionales + Creación, Administración y Dirección de Empresas',
                    label: 'Economía y Negocios Internacionales + Creación, Administración y Dirección de Empresas',
                },
                {
                    value: 'Economía y Negocios Internacionales + Derecho',
                    label: 'Economía y Negocios Internacionales + Derecho',
                },
                {
                    value: 'Economía y Negocios Internacionales + Relaciones Internacionales',
                    label: 'Economía y Negocios Internacionales + Relaciones Internacionales',
                },
                {
                    value: 'Edificación + Administración y Dirección de Empresas',
                    label: 'Edificación + Administración y Dirección de Empresas',
                },
                {
                    value: 'Educación Infantil + Educación Primaria',
                    label: 'Educación Infantil + Educación Primaria',
                },
                {
                    value: 'Educación Infantil + Psicología',
                    label: 'Educación Infantil + Psicología',
                },
                {
                    value: 'Educación Primaria + Ciencias de la Actividad Física y del Deporte',
                    label: 'Educación Primaria + Ciencias de la Actividad Física y del Deporte',
                },
                {
                    value: 'Educación Primaria + Educación Infantil',
                    label: 'Educación Primaria + Educación Infantil',
                },
                {
                    value: 'Educación Primaria + Educación Social',
                    label: 'Educación Primaria + Educación Social',
                },
                {
                    value: 'Educación Primaria + Estudios Franceses',
                    label: 'Educación Primaria + Estudios Franceses',
                },
                {
                    value: 'Educación Primaria + Estudios Ingleses',
                    label: 'Educación Primaria + Estudios Ingleses',
                },
                {
                    value: 'Educación Primaria + Humanidades',
                    label: 'Educación Primaria + Humanidades',
                },
                {
                    value: 'Educación Primaria + Humanidades y Estudios Culturales',
                    label: 'Educación Primaria + Humanidades y Estudios Culturales',
                },
                {
                    value: 'Educación Primaria + Matemáticas',
                    label: 'Educación Primaria + Matemáticas',
                },
                {
                    value: 'Educación Primaria + Psicología',
                    label: 'Educación Primaria + Psicología',
                },
                {
                    value: 'Educación Social + Información y Documentación',
                    label: 'Educación Social + Información y Documentación',
                },
                {
                    value: 'Educación Social + Magisterio Educación Primaria',
                    label: 'Educación Social + Magisterio Educación Primaria',
                },
                {
                    value: 'Educación Social + Psicología',
                    label: 'Educación Social + Psicología',
                },
                {
                    value: 'Educación Social + Trabajo Social',
                    label: 'Educación Social + Trabajo Social',
                },
                {
                    value: 'Empresa y Tecnología + Derecho',
                    label: 'Empresa y Tecnología + Derecho',
                },
                {
                    value: 'Empresa, Innovación y Tecnología + Marketing, Innovación y Tecnología',
                    label: 'Empresa, Innovación y Tecnología + Marketing, Innovación y Tecnología',
                },
                {
                    value: 'Enfermería + Fisioterapia',
                    label: 'Enfermería + Fisioterapia',
                },
                {
                    value: 'Enfermería + Podología',
                    label: 'Enfermería + Podología',
                },
                {
                    value: 'Enfermería + Psicología',
                    label: 'Enfermería + Psicología',
                },
                {
                    value: 'Enología + Ingeniería Agroalimentaria y del Medio Rural',
                    label: 'Enología + Ingeniería Agroalimentaria y del Medio Rural',
                },
                {
                    value: 'Español: Estudios Lingüísticos y Literarios + Gallego y Portugués: Estudios Lingüísticos y Literarios',
                    label: 'Español: Estudios Lingüísticos y Literarios + Gallego y Portugués: Estudios Lingüísticos y Literarios',
                },
                {
                    value: 'Estadística + Ingeniería Informática',
                    label: 'Estadística + Ingeniería Informática',
                },
                {
                    value: 'Estadística Aplicada + Sociología',
                    label: 'Estadística Aplicada + Sociología',
                },
                {
                    value: 'Estadística y Empresa + Finanzas y Contabilidad',
                    label: 'Estadística y Empresa + Finanzas y Contabilidad',
                },
                {
                    value: 'Estudios Árabes e Islámicos + Estudios Ingleses',
                    label: 'Estudios Árabes e Islámicos + Estudios Ingleses',
                },
                {
                    value: 'Estudios Franceses + Estudios Ingleses',
                    label: 'Estudios Franceses + Estudios Ingleses',
                },
                {
                    value: 'Estudios Globales + Turismo',
                    label: 'Estudios Globales + Turismo',
                },
                {
                    value: 'Estudios Ingleses + Filología Hispánica',
                    label: 'Estudios Ingleses + Filología Hispánica',
                },
                {
                    value: 'Estudios Internacionales + Administración de Empresas',
                    label: 'Estudios Internacionales + Administración de Empresas',
                },
                {
                    value: 'Estudios Internacionales + Ciencias Políticas',
                    label: 'Estudios Internacionales + Ciencias Políticas',
                },
                {
                    value: 'Estudios Internacionales + Derecho',
                    label: 'Estudios Internacionales + Derecho',
                },
                {
                    value: 'Estudios Internacionales + Economía',
                    label: 'Estudios Internacionales + Economía',
                },
                {
                    value: 'Estudios Internacionales + Estudios de Asia y África: Árabe',
                    label: 'Estudios Internacionales + Estudios de Asia y África: Árabe',
                },
                {
                    value: 'Farmacia + Administración y Dirección de Empresas',
                    label: 'Farmacia + Administración y Dirección de Empresas',
                },
                {
                    value: 'Farmacia + Biotecnología',
                    label: 'Farmacia + Biotecnología',
                },
                {
                    value: 'Farmacia + Gestión de Pequeñas y Medianas Empresas',
                    label: 'Farmacia + Gestión de Pequeñas y Medianas Empresas',
                },
                {
                    value: 'Farmacia + Nutrición Humana y Dietética',
                    label: 'Farmacia + Nutrición Humana y Dietética',
                },
                {
                    value: 'Farmacia + Óptica y Optometría',
                    label: 'Farmacia + Óptica y Optometría',
                },
                {
                    value: 'Filología Catalana + Filología Hispánica',
                    label: 'Filología Catalana + Filología Hispánica',
                },
                {
                    value: 'Filología Catalana y Estudios Occitanos + Lenguas Aplicadas y Traducción',
                    label: 'Filología Catalana y Estudios Occitanos + Lenguas Aplicadas y Traducción',
                },
                {
                    value: 'Filología Clásica + Estudios Ingleses',
                    label: 'Filología Clásica + Estudios Ingleses',
                },
                {
                    value: 'Filología Clásica + Filología Hispánica',
                    label: 'Filología Clásica + Filología Hispánica',
                },
                {
                    value: 'Filología Hispánica + Estudios Ingleses',
                    label: 'Filología Hispánica + Estudios Ingleses',
                },
                {
                    value: 'Filosofía + Ciencia Política y Administración Pública',
                    label: 'Filosofía + Ciencia Política y Administración Pública',
                },
                {
                    value: 'Filosofía + Ciencia Política y Gestión Pública',
                    label: 'Filosofía + Ciencia Política y Gestión Pública',
                },
                {
                    value: 'Filosofía + Economía',
                    label: 'Filosofía + Economía',
                },
                {
                    value: 'Filosofía + Filosofía, Política y Economía',
                    label: 'Filosofía + Filosofía, Política y Economía',
                },
                {
                    value: 'Filosofía + Historia',
                    label: 'Filosofía + Historia',
                },
                {
                    value: 'Filosofía + Periodismo',
                    label: 'Filosofía + Periodismo',
                },
                {
                    value: 'Filosofía e Historia + Ciencias de la Música y Tecnología Musical',
                    label: 'Filosofía e Historia + Ciencias de la Música y Tecnología Musical',
                },
                {
                    value: 'Filosofía, Política y Economía + Datos y Analítica de Negocio',
                    label: 'Filosofía, Política y Economía + Datos y Analítica de Negocio',
                },
                {
                    value: 'Filosofía, Política, Derecho y Economía + Datos y Analítica de Negocio',
                    label: 'Filosofía, Política, Derecho y Economía + Datos y Analítica de Negocio',
                },
                {
                    value: 'Finanzas y Contabilidad + Administración y Dirección de Empresas',
                    label: 'Finanzas y Contabilidad + Administración y Dirección de Empresas',
                },
                {
                    value: 'Finanzas y Contabilidad + Relaciones Laborales y Recursos Humanos',
                    label: 'Finanzas y Contabilidad + Relaciones Laborales y Recursos Humanos',
                },
                {
                    value: 'Física + Ciencia de Datos',
                    label: 'Física + Ciencia de Datos',
                },
                {
                    value: 'Física + Ingeniería de Materiales',
                    label: 'Física + Ingeniería de Materiales',
                },
                {
                    value: 'Física + Ingeniería Electrónica',
                    label: 'Física + Ingeniería Electrónica',
                },
                {
                    value: 'Física + Matemáticas',
                    label: 'Física + Matemáticas',
                },
                { value: 'Física + Química', label: 'Física + Química' },
                {
                    value: 'Fisioterapia + Ciencias de la Actividad Física y del Deporte',
                    label: 'Fisioterapia + Ciencias de la Actividad Física y del Deporte',
                },
                {
                    value: 'Fisioterapia + Enfermería',
                    label: 'Fisioterapia + Enfermería',
                },
                {
                    value: 'Fisioterapia + Terapia Ocupacional',
                    label: 'Fisioterapia + Terapia Ocupacional',
                },
                {
                    value: 'Fundamentos de la Arquitectura + Diseño de Interiores',
                    label: 'Fundamentos de la Arquitectura + Diseño de Interiores',
                },
                {
                    value: 'Fundamentos de la Arquitectura + Paisajismo',
                    label: 'Fundamentos de la Arquitectura + Paisajismo',
                },
                {
                    value: 'Gastronomía + Administración y Dirección de Empresas',
                    label: 'Gastronomía + Administración y Dirección de Empresas',
                },
                {
                    value: 'Genética + Bioinformática',
                    label: 'Genética + Bioinformática',
                },
                {
                    value: 'Geografía e Historia + Historia del Arte',
                    label: 'Geografía e Historia + Historia del Arte',
                },
                {
                    value: 'Geografía e Historia + Relaciones Internacionales',
                    label: 'Geografía e Historia + Relaciones Internacionales',
                },
                {
                    value: 'Geografía y Gestión del Territorio + Historia',
                    label: 'Geografía y Gestión del Territorio + Historia',
                },
                {
                    value: 'Geología + Ciencias Ambientales',
                    label: 'Geología + Ciencias Ambientales',
                },
                {
                    value: 'Gestión de Negocios + Relaciones Laborales y Recursos Humanos',
                    label: 'Gestión de Negocios + Relaciones Laborales y Recursos Humanos',
                },
                {
                    value: 'Gestión de Pequeñas y Medianas Empresas + Relaciones Laborales y Recursos Humanos',
                    label: 'Gestión de Pequeñas y Medianas Empresas + Relaciones Laborales y Recursos Humanos',
                },
                {
                    value: 'Gestión del Turismo + Gestión de Pequeñas y Medianas Empresas',
                    label: 'Gestión del Turismo + Gestión de Pequeñas y Medianas Empresas',
                },
                {
                    value: 'Gestión Logística + Administración y Dirección de Empresas',
                    label: 'Gestión Logística + Administración y Dirección de Empresas',
                },
                {
                    value: 'Gestión Turística y Hotelera + Marketing',
                    label: 'Gestión Turística y Hotelera + Marketing',
                },
                {
                    value: 'Gestión y Administración Pública + Economía',
                    label: 'Gestión y Administración Pública + Economía',
                },
                {
                    value: 'Historia + Educación Primaria',
                    label: 'Historia + Educación Primaria',
                },
                {
                    value: 'Historia + Estudios Internacionales',
                    label: 'Historia + Estudios Internacionales',
                },
                {
                    value: 'Historia + Filología Clásica',
                    label: 'Historia + Filología Clásica',
                },
                {
                    value: 'Historia + Geografía, Desarrollo Territorial y Sostenibilidad',
                    label: 'Historia + Geografía, Desarrollo Territorial y Sostenibilidad',
                },
                {
                    value: 'Historia + Historia del Arte',
                    label: 'Historia + Historia del Arte',
                },
                {
                    value: 'Historia + Humanidades',
                    label: 'Historia + Humanidades',
                },
                {
                    value: 'Historia + Periodismo',
                    label: 'Historia + Periodismo',
                },
                { value: 'Historia + Turismo', label: 'Historia + Turismo' },
                {
                    value: 'Historia del Arte + Estudios Clásicos y de la Antigüedad',
                    label: 'Historia del Arte + Estudios Clásicos y de la Antigüedad',
                },
                {
                    value: 'Historia del Arte + Historia',
                    label: 'Historia del Arte + Historia',
                },
                {
                    value: 'Humanidades + Comunicación Audiovisual',
                    label: 'Humanidades + Comunicación Audiovisual',
                },
                {
                    value: 'Humanidades + Comunicación Digital',
                    label: 'Humanidades + Comunicación Digital',
                },
                {
                    value: 'Humanidades + Magisterio en Educación Primaria',
                    label: 'Humanidades + Magisterio en Educación Primaria',
                },
                {
                    value: 'Humanidades + Periodismo',
                    label: 'Humanidades + Periodismo',
                },
                {
                    value: 'Humanidades + Publicidad y Relaciones Públicas',
                    label: 'Humanidades + Publicidad y Relaciones Públicas',
                },
                {
                    value: 'Humanidades + Traducción e Interpretación',
                    label: 'Humanidades + Traducción e Interpretación',
                },
                {
                    value: 'Humanidades y Estudios Culturales + Administración y Dirección de Empresas',
                    label: 'Humanidades y Estudios Culturales + Administración y Dirección de Empresas',
                },
                {
                    value: 'Humanidades y Estudios Culturales + Derecho',
                    label: 'Humanidades y Estudios Culturales + Derecho',
                },
                {
                    value: 'Humanidades y Estudios Culturales + International Studies',
                    label: 'Humanidades y Estudios Culturales + International Studies',
                },
                {
                    value: 'Humanidades y Estudios Culturales + Periodismo',
                    label: 'Humanidades y Estudios Culturales + Periodismo',
                },
                {
                    value: 'Información y Documentación + Ciencia Política y Administración Pública',
                    label: 'Información y Documentación + Ciencia Política y Administración Pública',
                },
                {
                    value: 'Información y Documentación + Historia',
                    label: 'Información y Documentación + Historia',
                },
                {
                    value: 'Ingeniería Agrícola + Ciencias Ambientales',
                    label: 'Ingeniería Agrícola + Ciencias Ambientales',
                },
                {
                    value: 'Ingeniería Agrícola y Agroalimentaria + Ingeniería Forestal y del Medio Natural',
                    label: 'Ingeniería Agrícola y Agroalimentaria + Ingeniería Forestal y del Medio Natural',
                },
                {
                    value: 'Ingeniería Agrícola y del Medio Rural + Ingeniería de las Industrias Agrarias y Alimentarias',
                    label: 'Ingeniería Agrícola y del Medio Rural + Ingeniería de las Industrias Agrarias y Alimentarias',
                },
                {
                    value: 'Ingeniería Agrícola y del Medio Rural + Ingeniería Forestal y del Medio Natural',
                    label: 'Ingeniería Agrícola y del Medio Rural + Ingeniería Forestal y del Medio Natural',
                },
                {
                    value: 'Ingeniería Agroalimentaria y del Medio Rural + Ciencia y Tecnología de los Alimentos',
                    label: 'Ingeniería Agroalimentaria y del Medio Rural + Ciencia y Tecnología de los Alimentos',
                },
                {
                    value: 'Ingeniería Agroalimentaria y del Medio Rural + Ingeniería en Organización Industrial',
                    label: 'Ingeniería Agroalimentaria y del Medio Rural + Ingeniería en Organización Industrial',
                },
                {
                    value: 'Ingeniería Agroalimentaria y del Medio Rural + Innovación de Procesos y Productos Alimentarios',
                    label: 'Ingeniería Agroalimentaria y del Medio Rural + Innovación de Procesos y Productos Alimentarios',
                },
                {
                    value: 'Ingeniería Ambiental + Ingeniería en Organización Industrial',
                    label: 'Ingeniería Ambiental + Ingeniería en Organización Industrial',
                },
                {
                    value: 'Ingeniería Biomédica + Ingeniería de Sistemas y Servicios de Telecomunicaciones',
                    label: 'Ingeniería Biomédica + Ingeniería de Sistemas y Servicios de Telecomunicaciones',
                },
                {
                    value: 'Ingeniería Biomédica + Ingeniería Electrónica Industrial y Automática',
                    label: 'Ingeniería Biomédica + Ingeniería Electrónica Industrial y Automática',
                },
                {
                    value: 'Ingeniería Biomédica + Ingeniería en Tecnologías de Telecomunicación',
                    label: 'Ingeniería Biomédica + Ingeniería en Tecnologías de Telecomunicación',
                },
                {
                    value: 'Ingeniería Biomédica + Ingeniería Mecánica',
                    label: 'Ingeniería Biomédica + Ingeniería Mecánica',
                },
                {
                    value: 'Ingeniería Civil + Administración y Dirección de Empresas',
                    label: 'Ingeniería Civil + Administración y Dirección de Empresas',
                },
                {
                    value: 'Ingeniería Civil + Arquitectura Técnica',
                    label: 'Ingeniería Civil + Arquitectura Técnica',
                },
                {
                    value: 'Ingeniería Civil + Ingeniería de la Energía y Recursos Minerales',
                    label: 'Ingeniería Civil + Ingeniería de la Energía y Recursos Minerales',
                },
                {
                    value: 'Ingeniería Civil + Ingeniería de la Tecnología de Minas y Energía',
                    label: 'Ingeniería Civil + Ingeniería de la Tecnología de Minas y Energía',
                },
                {
                    value: 'Ingeniería Civil + Ingeniería de los Recursos Mineros y Energéticos',
                    label: 'Ingeniería Civil + Ingeniería de los Recursos Mineros y Energéticos',
                },
                {
                    value: 'Ingeniería Civil + Ingeniería en Tecnologías Mineras',
                    label: 'Ingeniería Civil + Ingeniería en Tecnologías Mineras',
                },
                {
                    value: 'Ingeniería Civil y Territorial + Administración y Dirección de Empresas',
                    label: 'Ingeniería Civil y Territorial + Administración y Dirección de Empresas',
                },
                {
                    value: 'Ingeniería de la Ciberseguridad + Ingeniería Informática',
                    label: 'Ingeniería de la Ciberseguridad + Ingeniería Informática',
                },
                {
                    value: 'Ingeniería de la Energía + Ingeniería Ambiental',
                    label: 'Ingeniería de la Energía + Ingeniería Ambiental',
                },
                {
                    value: 'Ingeniería de la Energía + Ingeniería en Organización Industrial',
                    label: 'Ingeniería de la Energía + Ingeniería en Organización Industrial',
                },
                {
                    value: 'Ingeniería de la Energía y Recursos Minerales + Ingeniería Eléctrica',
                    label: 'Ingeniería de la Energía y Recursos Minerales + Ingeniería Eléctrica',
                },
                {
                    value: 'Ingeniería de las Industrias Agrarias y Alimentarias + Ciencia y Tecnología de los Alimentos',
                    label: 'Ingeniería de las Industrias Agrarias y Alimentarias + Ciencia y Tecnología de los Alimentos',
                },
                {
                    value: 'Ingeniería de las Industrias Agrarias y Alimentarias + Enología',
                    label: 'Ingeniería de las Industrias Agrarias y Alimentarias + Enología',
                },
                {
                    value: 'Ingeniería de las Industrias Agrarias y Alimentarias + Ingeniería de Organización Industrial',
                    label: 'Ingeniería de las Industrias Agrarias y Alimentarias + Ingeniería de Organización Industrial',
                },
                {
                    value: 'Ingeniería de las Industrias Agrarias y Alimentarias + Nutrición Humana y Dietética',
                    label: 'Ingeniería de las Industrias Agrarias y Alimentarias + Nutrición Humana y Dietética',
                },
                {
                    value: 'Ingeniería de las Tecnologías Industriales + ADE',
                    label: 'Ingeniería de las Tecnologías Industriales + ADE',
                },
                {
                    value: 'Ingeniería de Materiales + Ingeniería de la Energía',
                    label: 'Ingeniería de Materiales + Ingeniería de la Energía',
                },
                {
                    value: 'Ingeniería de Materiales + Ingeniería en Organización Industrial',
                    label: 'Ingeniería de Materiales + Ingeniería en Organización Industrial',
                },
                {
                    value: 'Ingeniería de Materiales + Ingeniería Mecánica',
                    label: 'Ingeniería de Materiales + Ingeniería Mecánica',
                },
                {
                    value: 'Ingeniería de Organización Industrial + Administración y Dirección de Empresas',
                    label: 'Ingeniería de Organización Industrial + Administración y Dirección de Empresas',
                },
                {
                    value: 'Ingeniería de Sistemas Aeroespaciales + Ingeniería de Sistemas de Telecomunicación',
                    label: 'Ingeniería de Sistemas Aeroespaciales + Ingeniería de Sistemas de Telecomunicación',
                },
                {
                    value: 'Ingeniería de Sistemas Aeroespaciales + Ingeniería Telemática',
                    label: 'Ingeniería de Sistemas Aeroespaciales + Ingeniería Telemática',
                },
                {
                    value: 'Ingeniería de Sistemas Audiovisuales + Ingeniería Multimedia',
                    label: 'Ingeniería de Sistemas Audiovisuales + Ingeniería Multimedia',
                },
                {
                    value: 'Ingeniería de Sistemas de Información + Administración y Dirección de Empresas',
                    label: 'Ingeniería de Sistemas de Información + Administración y Dirección de Empresas',
                },
                {
                    value: 'Ingeniería de Sistemas de Telecomunicación + Ingeniería Biomédica',
                    label: 'Ingeniería de Sistemas de Telecomunicación + Ingeniería Biomédica',
                },
                {
                    value: 'Ingeniería de Sistemas de Telecomunicación + Ingeniería en Organización de las TIC',
                    label: 'Ingeniería de Sistemas de Telecomunicación + Ingeniería en Organización de las TIC',
                },
                {
                    value: 'Ingeniería de Sistemas de Telecomunicación, Sonido e Imagen + Comunicación Audiovisual',
                    label: 'Ingeniería de Sistemas de Telecomunicación, Sonido e Imagen + Comunicación Audiovisual',
                },
                {
                    value: 'Ingeniería de Tecnologías de Telecomunicación + Administración y Dirección de Empresas',
                    label: 'Ingeniería de Tecnologías de Telecomunicación + Administración y Dirección de Empresas',
                },
                {
                    value: 'Ingeniería del Software + Matemáticas',
                    label: 'Ingeniería del Software + Matemáticas',
                },
                {
                    value: 'Ingeniería Eléctrica + Ingeniería de la Energía',
                    label: 'Ingeniería Eléctrica + Ingeniería de la Energía',
                },
                {
                    value: 'Ingeniería Eléctrica + Ingeniería Electrónica Industrial',
                    label: 'Ingeniería Eléctrica + Ingeniería Electrónica Industrial',
                },
                {
                    value: 'Ingeniería Eléctrica + Ingeniería Electrónica Industrial y Automática',
                    label: 'Ingeniería Eléctrica + Ingeniería Electrónica Industrial y Automática',
                },
                {
                    value: 'Ingeniería Eléctrica + Ingeniería en Tecnologías Industriales',
                    label: 'Ingeniería Eléctrica + Ingeniería en Tecnologías Industriales',
                },
                {
                    value: 'Ingeniería Eléctrica + Ingeniería Energética',
                    label: 'Ingeniería Eléctrica + Ingeniería Energética',
                },
                {
                    value: 'Ingeniería Eléctrica + Ingeniería Mecánica',
                    label: 'Ingeniería Eléctrica + Ingeniería Mecánica',
                },
                {
                    value: 'Ingeniería Electrónica de Comunicaciones + Ingeniería Electrónica y Automática Industrial',
                    label: 'Ingeniería Electrónica de Comunicaciones + Ingeniería Electrónica y Automática Industrial',
                },
                {
                    value: 'Ingeniería Electrónica de Comunicaciones + Ingeniería Telemática',
                    label: 'Ingeniería Electrónica de Comunicaciones + Ingeniería Telemática',
                },
                {
                    value: 'Ingeniería Electrónica de Telecomunicación + Ingeniería en Organización de las TIC',
                    label: 'Ingeniería Electrónica de Telecomunicación + Ingeniería en Organización de las TIC',
                },
                {
                    value: 'Ingeniería Electrónica de Telecomunicación + Ingeniería Informática',
                    label: 'Ingeniería Electrónica de Telecomunicación + Ingeniería Informática',
                },
                {
                    value: 'Ingeniería Electrónica Industrial + Ingeniería Eléctrica',
                    label: 'Ingeniería Electrónica Industrial + Ingeniería Eléctrica',
                },
                {
                    value: 'Ingeniería Electrónica Industrial + Ingeniería Mecánica',
                    label: 'Ingeniería Electrónica Industrial + Ingeniería Mecánica',
                },
                {
                    value: 'Ingeniería Electrónica Industrial y Automática + Ingeniería Eléctrica',
                    label: 'Ingeniería Electrónica Industrial y Automática + Ingeniería Eléctrica',
                },
                {
                    value: 'Ingeniería Electrónica Industrial y Automática + Ingeniería en Tecnologías Industriales',
                    label: 'Ingeniería Electrónica Industrial y Automática + Ingeniería en Tecnologías Industriales',
                },
                {
                    value: 'Ingeniería Electrónica Industrial y Automática + Ingeniería Informática',
                    label: 'Ingeniería Electrónica Industrial y Automática + Ingeniería Informática',
                },
                {
                    value: 'Ingeniería Electrónica Industrial y Automática + Ingeniería Mecánica',
                    label: 'Ingeniería Electrónica Industrial y Automática + Ingeniería Mecánica',
                },
                {
                    value: 'Ingeniería Electrónica Industrial y Automática, en Ingeniería Eléctrica + Ingeniería Mecánica',
                    label: 'Ingeniería Electrónica Industrial y Automática, en Ingeniería Eléctrica + Ingeniería Mecánica',
                },
                {
                    value: 'Ingeniería Electrónica y Automática + Ingeniería Robótica',
                    label: 'Ingeniería Electrónica y Automática + Ingeniería Robótica',
                },
                {
                    value: 'Ingeniería en Diseño Industrial y Desarrollo de Producto + Ingeniería Mecánica',
                    label: 'Ingeniería en Diseño Industrial y Desarrollo de Producto + Ingeniería Mecánica',
                },
                {
                    value: 'Ingeniería en Diseño Industrial y Desarrollo de Productos + Ingeniería Mecánica',
                    label: 'Ingeniería en Diseño Industrial y Desarrollo de Productos + Ingeniería Mecánica',
                },
                {
                    value: 'Ingeniería en Diseño Industrial y Desarrollo del Producto + Ingeniería del Automóvil',
                    label: 'Ingeniería en Diseño Industrial y Desarrollo del Producto + Ingeniería del Automóvil',
                },
                {
                    value: 'Ingeniería en Diseño Industrial y Desarrollo del Producto + Ingeniería Mecánica',
                    label: 'Ingeniería en Diseño Industrial y Desarrollo del Producto + Ingeniería Mecánica',
                },
                {
                    value: 'Ingeniería en Electrónica Industrial y Automática + Ingeniería Biomédica',
                    label: 'Ingeniería en Electrónica Industrial y Automática + Ingeniería Biomédica',
                },
                {
                    value: 'Ingeniería en Organización Industrial + Administración y Dirección de Empresas',
                    label: 'Ingeniería en Organización Industrial + Administración y Dirección de Empresas',
                },
                {
                    value: 'Ingeniería en Química + Administración y Dirección de Empresas',
                    label: 'Ingeniería en Química + Administración y Dirección de Empresas',
                },
                {
                    value: 'Ingeniería en Recursos Energéticos + Ingeniería Química Industrial',
                    label: 'Ingeniería en Recursos Energéticos + Ingeniería Química Industrial',
                },
                {
                    value: 'Ingeniería en Sistemas de Telecomunicación + Administración y Dirección de Empresas',
                    label: 'Ingeniería en Sistemas de Telecomunicación + Administración y Dirección de Empresas',
                },
                {
                    value: 'Ingeniería en Sistemas de Telecomunicación + Ingeniería Informática',
                    label: 'Ingeniería en Sistemas de Telecomunicación + Ingeniería Informática',
                },
                {
                    value: 'Ingeniería en Tecnologías de la Telecomunicación + Ingeniería Aeroespacial en Aeronavegación',
                    label: 'Ingeniería en Tecnologías de la Telecomunicación + Ingeniería Aeroespacial en Aeronavegación',
                },
                {
                    value: 'Ingeniería en Tecnologías de la Telecomunicación + Matemáticas',
                    label: 'Ingeniería en Tecnologías de la Telecomunicación + Matemáticas',
                },
                {
                    value: 'Ingeniería en Tecnologías de la Telecomunicación + Administración y Dirección de Empresas',
                    label: 'Ingeniería en Tecnologías de la Telecomunicación + Administración y Dirección de Empresas',
                },
                {
                    value: 'Ingeniería en Tecnologías de la Telecomunicación + Análisis de Negocios / Business Analytics',
                    label: 'Ingeniería en Tecnologías de la Telecomunicación + Análisis de Negocios / Business Analytics',
                },
                {
                    value: 'Ingeniería en Tecnologías Industriales + Administración y Dirección de Empresas',
                    label: 'Ingeniería en Tecnologías Industriales + Administración y Dirección de Empresas',
                },
                {
                    value: 'Ingeniería en Tecnologías y Servicios de Telecomunicación + Ciencia e Ingeniería de Datos',
                    label: 'Ingeniería en Tecnologías y Servicios de Telecomunicación + Ciencia e Ingeniería de Datos',
                },
                {
                    value: 'Ingeniería Física + Ingeniería en Tecnologías Industriales',
                    label: 'Ingeniería Física + Ingeniería en Tecnologías Industriales',
                },
                {
                    value: 'Ingeniería Forestal + Conservación de la Naturaleza',
                    label: 'Ingeniería Forestal + Conservación de la Naturaleza',
                },
                {
                    value: 'Ingeniería Forestal + Ingeniería Agroalimentaria y del Medio Rural',
                    label: 'Ingeniería Forestal + Ingeniería Agroalimentaria y del Medio Rural',
                },
                {
                    value: 'Ingeniería Forestal y del Medio Natural + Ciencias Ambientales',
                    label: 'Ingeniería Forestal y del Medio Natural + Ciencias Ambientales',
                },
                {
                    value: 'Ingeniería Geomática + Ingeniería de las Tecnologías de la Información Geoespacial',
                    label: 'Ingeniería Geomática + Ingeniería de las Tecnologías de la Información Geoespacial',
                },
                {
                    value: 'Ingeniería Geomática y Topografía + Matemáticas',
                    label: 'Ingeniería Geomática y Topografía + Matemáticas',
                },
                {
                    value: 'Ingeniería Informática + ADE',
                    label: 'Ingeniería Informática + ADE',
                },
                {
                    value: 'Ingeniería Informática + Administración de Empresas',
                    label: 'Ingeniería Informática + Administración de Empresas',
                },
                {
                    value: 'Ingeniería Informática + Administración y Dirección de Empresas',
                    label: 'Ingeniería Informática + Administración y Dirección de Empresas',
                },
                {
                    value: 'Ingeniería Informática + Administración y Dirección de Empresas Tecnológicas',
                    label: 'Ingeniería Informática + Administración y Dirección de Empresas Tecnológicas',
                },
                {
                    value: 'Ingeniería Informática + Biotecnología',
                    label: 'Ingeniería Informática + Biotecnología',
                },
                {
                    value: 'Ingeniería Informática + Dirección de Empresas Tecnológicas',
                    label: 'Ingeniería Informática + Dirección de Empresas Tecnológicas',
                },
                {
                    value: 'Ingeniería Informática + Diseño y Desarrollo de Videojuegos',
                    label: 'Ingeniería Informática + Diseño y Desarrollo de Videojuegos',
                },
                {
                    value: 'Ingeniería Informática + Estadística',
                    label: 'Ingeniería Informática + Estadística',
                },
                {
                    value: 'Ingeniería Informática + Ingeniería de Computadores',
                    label: 'Ingeniería Informática + Ingeniería de Computadores',
                },
                {
                    value: 'Ingeniería Informática + Ingeniería de la Ciberseguridad',
                    label: 'Ingeniería Informática + Ingeniería de la Ciberseguridad',
                },
                {
                    value: 'Ingeniería Informática + Ingeniería de Organización Industrial',
                    label: 'Ingeniería Informática + Ingeniería de Organización Industrial',
                },
                {
                    value: 'Ingeniería Informática + Ingeniería de Sistemas de Telecomunicación',
                    label: 'Ingeniería Informática + Ingeniería de Sistemas de Telecomunicación',
                },
                {
                    value: 'Ingeniería Informática + Ingeniería del Software',
                    label: 'Ingeniería Informática + Ingeniería del Software',
                },
                {
                    value: 'Ingeniería Informática + Ingeniería Informática Biomédica',
                    label: 'Ingeniería Informática + Ingeniería Informática Biomédica',
                },
                {
                    value: 'Ingeniería Informática + Ingeniería Multimedia',
                    label: 'Ingeniería Informática + Ingeniería Multimedia',
                },
                {
                    value: 'Ingeniería Informática + Ingeniería Robótica e Inteligencia Artificial',
                    label: 'Ingeniería Informática + Ingeniería Robótica e Inteligencia Artificial',
                },
                {
                    value: 'Ingeniería Informática + Inteligencia Artificial',
                    label: 'Ingeniería Informática + Inteligencia Artificial',
                },
                {
                    value: 'Ingeniería Informática + Matemáticas',
                    label: 'Ingeniería Informática + Matemáticas',
                },
                {
                    value: 'Ingeniería Informática de Servicios y Aplicaciones + Matemáticas',
                    label: 'Ingeniería Informática de Servicios y Aplicaciones + Matemáticas',
                },
                {
                    value: 'Ingeniería Informática del Software + Matemáticas',
                    label: 'Ingeniería Informática del Software + Matemáticas',
                },
                {
                    value: 'Ingeniería Informática en Sistemas de Información + Información y Documentación',
                    label: 'Ingeniería Informática en Sistemas de Información + Información y Documentación',
                },
                {
                    value: 'Ingeniería Informática en Tecnologías de la Información + Ciencia e Ingeniería de Datos',
                    label: 'Ingeniería Informática en Tecnologías de la Información + Ciencia e Ingeniería de Datos',
                },
                {
                    value: 'Ingeniería Informática. Tecnologías Informáticas + Matemáticas',
                    label: 'Ingeniería Informática. Tecnologías Informáticas + Matemáticas',
                },
                {
                    value: 'Ingeniería Matemática + Ciencia e Ingeniería de Datos',
                    label: 'Ingeniería Matemática + Ciencia e Ingeniería de Datos',
                },
                {
                    value: 'Ingeniería Matemática + Ingeniería Informática',
                    label: 'Ingeniería Matemática + Ingeniería Informática',
                },
                {
                    value: 'Ingeniería Matemática Aplicada al Análisis de Datos + Ingeniería Informática',
                    label: 'Ingeniería Matemática Aplicada al Análisis de Datos + Ingeniería Informática',
                },
                {
                    value: 'Ingeniería Mecánica + Administración y Dirección de Empresas',
                    label: 'Ingeniería Mecánica + Administración y Dirección de Empresas',
                },
                {
                    value: 'Ingeniería Mecánica + Ingeniería de Automoción',
                    label: 'Ingeniería Mecánica + Ingeniería de Automoción',
                },
                {
                    value: 'Ingeniería Mecánica + Ingeniería de la Energía y Sostenibilidad',
                    label: 'Ingeniería Mecánica + Ingeniería de la Energía y Sostenibilidad',
                },
                {
                    value: 'Ingeniería Mecánica + Ingeniería de Organización Industrial',
                    label: 'Ingeniería Mecánica + Ingeniería de Organización Industrial',
                },
                {
                    value: 'Ingeniería Mecánica + Ingeniería del Automóvil',
                    label: 'Ingeniería Mecánica + Ingeniería del Automóvil',
                },
                {
                    value: 'Ingeniería Mecánica + Ingeniería Diseño Industrial y Desarrollo del Producto',
                    label: 'Ingeniería Mecánica + Ingeniería Diseño Industrial y Desarrollo del Producto',
                },
                {
                    value: 'Ingeniería Mecánica + Ingeniería Eléctrica',
                    label: 'Ingeniería Mecánica + Ingeniería Eléctrica',
                },
                {
                    value: 'Ingeniería Mecánica + Ingeniería Electrónica Industrial y Automática',
                    label: 'Ingeniería Mecánica + Ingeniería Electrónica Industrial y Automática',
                },
                {
                    value: 'Ingeniería Mecánica + Ingeniería en Diseño Industrial',
                    label: 'Ingeniería Mecánica + Ingeniería en Diseño Industrial',
                },
                {
                    value: 'Ingeniería Mecánica + Ingeniería en Diseño Industrial y Desarrollo del Producto',
                    label: 'Ingeniería Mecánica + Ingeniería en Diseño Industrial y Desarrollo del Producto',
                },
                {
                    value: 'Ingeniería Mecánica + Ingeniería en Explotación de Minas y Recursos Energéticos',
                    label: 'Ingeniería Mecánica + Ingeniería en Explotación de Minas y Recursos Energéticos',
                },
                {
                    value: 'Ingeniería Mecánica + Ingeniería en Tecnologías Industriales',
                    label: 'Ingeniería Mecánica + Ingeniería en Tecnologías Industriales',
                },
                {
                    value: 'Ingeniería Mecánica + Ingeniería Naval y Oceánica',
                    label: 'Ingeniería Mecánica + Ingeniería Naval y Oceánica',
                },
                {
                    value: 'Ingeniería Mecatrónica + Ingeniería de Organización Industrial',
                    label: 'Ingeniería Mecatrónica + Ingeniería de Organización Industrial',
                },
                {
                    value: 'Ingeniería Minera + Ingeniería de la Energía',
                    label: 'Ingeniería Minera + Ingeniería de la Energía',
                },
                {
                    value: 'Ingeniería Química + Biotecnología',
                    label: 'Ingeniería Química + Biotecnología',
                },
                {
                    value: 'Ingeniería Química + Ingeniería Ambiental',
                    label: 'Ingeniería Química + Ingeniería Ambiental',
                },
                {
                    value: 'Ingeniería Química + Ingeniería de la Energía',
                    label: 'Ingeniería Química + Ingeniería de la Energía',
                },
                {
                    value: 'Ingeniería Química + Ingeniería en Organización Industrial',
                    label: 'Ingeniería Química + Ingeniería en Organización Industrial',
                },
                {
                    value: 'Ingeniería Telemática + Ingeniería de Tecnologías de Telecomunicación',
                    label: 'Ingeniería Telemática + Ingeniería de Tecnologías de Telecomunicación',
                },
                {
                    value: 'Ingeniería Telemática + Ingeniería Informática',
                    label: 'Ingeniería Telemática + Ingeniería Informática',
                },
                {
                    value: 'Ingeniería Telemática + Ingeniería Informática en Tecnologías de la Información',
                    label: 'Ingeniería Telemática + Ingeniería Informática en Tecnologías de la Información',
                },
                {
                    value: 'Ingeniería y Sistemas de Datos + Ingeniería Telemática',
                    label: 'Ingeniería y Sistemas de Datos + Ingeniería Telemática',
                },
                {
                    value: 'Inglés: Estudios Lingüísticos y Literarios + Español: Estudios Lingüísticos y Literarios',
                    label: 'Inglés: Estudios Lingüísticos y Literarios + Español: Estudios Lingüísticos y Literarios',
                },
                {
                    value: 'Inglés: Estudios Lingüísticos y Literarios + Gallego y Portugués: Estudios Lingüísticos y Literarios',
                    label: 'Inglés: Estudios Lingüísticos y Literarios + Gallego y Portugués: Estudios Lingüísticos y Literarios',
                },
                {
                    value: 'Inteligencia Artificial + Ingeniería de Datos',
                    label: 'Inteligencia Artificial + Ingeniería de Datos',
                },
                {
                    value: 'Inteligencia Artificial + Ingeniería Informática',
                    label: 'Inteligencia Artificial + Ingeniería Informática',
                },
                {
                    value: 'Inteligencia de Negocios + Administración y Dirección de Empresas',
                    label: 'Inteligencia de Negocios + Administración y Dirección de Empresas',
                },
                {
                    value: 'Inteligencia de Negocios + Economía',
                    label: 'Inteligencia de Negocios + Economía',
                },
                {
                    value: 'International Relations + Protocolo, Organización de Eventos y Comunicación Corporativa',
                    label: 'International Relations + Protocolo, Organización de Eventos y Comunicación Corporativa',
                },
                {
                    value: 'Lengua de Signos Española y Comunidad Sorda + Educación Primaria',
                    label: 'Lengua de Signos Española y Comunidad Sorda + Educación Primaria',
                },
                {
                    value: 'Lengua de Signos Española y Comunidad Sorda + Terapia Ocupacional',
                    label: 'Lengua de Signos Española y Comunidad Sorda + Terapia Ocupacional',
                },
                {
                    value: 'Lengua de Signos Española y Comunidad Sorda + Trabajo Social',
                    label: 'Lengua de Signos Española y Comunidad Sorda + Trabajo Social',
                },
                {
                    value: 'Lengua y Cultura Vasca + Lenguas Modernas: Estudios Ingleses',
                    label: 'Lengua y Cultura Vasca + Lenguas Modernas: Estudios Ingleses',
                },
                {
                    value: 'Lengua y Literatura Alemanas + Educación Primaria',
                    label: 'Lengua y Literatura Alemanas + Educación Primaria',
                },
                {
                    value: 'Lenguas Aplicadas y Traducción + Estudios Ingleses',
                    label: 'Lenguas Aplicadas y Traducción + Estudios Ingleses',
                },
                {
                    value: 'Lenguas Aplicadas y Traducción + Filología Hispánica',
                    label: 'Lenguas Aplicadas y Traducción + Filología Hispánica',
                },
                {
                    value: 'Lenguas Modernas, Literaturas y Culturas + Educación Primaria',
                    label: 'Lenguas Modernas, Literaturas y Culturas + Educación Primaria',
                },
                {
                    value: 'Lingüística y Lenguas Aplicadas + Estudios Ingleses',
                    label: 'Lingüística y Lenguas Aplicadas + Estudios Ingleses',
                },
                {
                    value: 'Logopedia + Psicología',
                    label: 'Logopedia + Psicología',
                },
                {
                    value: 'Maestro de Educación Infantil + Maestro de Educación Primaria',
                    label: 'Maestro de Educación Infantil + Maestro de Educación Primaria',
                },
                {
                    value: 'Maestro de Educación Infantil + Maestro en Educación Primaria',
                    label: 'Maestro de Educación Infantil + Maestro en Educación Primaria',
                },
                {
                    value: 'Maestro Educación Primaria + Maestro en Educación Infantil',
                    label: 'Maestro Educación Primaria + Maestro en Educación Infantil',
                },
                {
                    value: 'Maestro en Educación Infantil + Maestro en Educación Primaria',
                    label: 'Maestro en Educación Infantil + Maestro en Educación Primaria',
                },
                {
                    value: 'Maestro en Educación Infantil + Pedagogía',
                    label: 'Maestro en Educación Infantil + Pedagogía',
                },
                {
                    value: 'Maestro en Educación Infantil + Primaria',
                    label: 'Maestro en Educación Infantil + Primaria',
                },
                {
                    value: 'Maestro en Educación Infantil + Psicología',
                    label: 'Maestro en Educación Infantil + Psicología',
                },
                {
                    value: 'Maestro en Educación Primaria + Maestro en Educación Infantil',
                    label: 'Maestro en Educación Primaria + Maestro en Educación Infantil',
                },
                {
                    value: 'Maestro en Educación Primaria + Pedagogía',
                    label: 'Maestro en Educación Primaria + Pedagogía',
                },
                {
                    value: 'Maestro en Educación Primaria + Psicología',
                    label: 'Maestro en Educación Primaria + Psicología',
                },
                {
                    value: 'Magisterio de Educación Infantil + Magisterio de Educación Primaria',
                    label: 'Magisterio de Educación Infantil + Magisterio de Educación Primaria',
                },
                {
                    value: 'Magisterio en Educación Infantil + Educación Primaria',
                    label: 'Magisterio en Educación Infantil + Educación Primaria',
                },
                {
                    value: 'Marketing + Administración y Dirección de Empresas',
                    label: 'Marketing + Administración y Dirección de Empresas',
                },
                {
                    value: 'Marketing + Publicidad y Relaciones Públicas',
                    label: 'Marketing + Publicidad y Relaciones Públicas',
                },
                {
                    value: 'Marketing e Investigación de Mercados + Turismo',
                    label: 'Marketing e Investigación de Mercados + Turismo',
                },
                {
                    value: 'Marketing y Comunidades Digitales + Turismo y Gestión del Ocio',
                    label: 'Marketing y Comunidades Digitales + Turismo y Gestión del Ocio',
                },
                {
                    value: 'Marketing y Dirección Comercial + Administración y Dirección de Empresas',
                    label: 'Marketing y Dirección Comercial + Administración y Dirección de Empresas',
                },
                {
                    value: 'Marketing y Dirección Comercial + Dirección de Empresas',
                    label: 'Marketing y Dirección Comercial + Dirección de Empresas',
                },
                {
                    value: 'Marketing y Dirección Comercial + Publicidad y Relaciones Públicas',
                    label: 'Marketing y Dirección Comercial + Publicidad y Relaciones Públicas',
                },
                {
                    value: 'Marketing y Gestión Comercial + Comunicación Digital',
                    label: 'Marketing y Gestión Comercial + Comunicación Digital',
                },
                {
                    value: 'Matemáticas + Administración y Dirección de Empresas',
                    label: 'Matemáticas + Administración y Dirección de Empresas',
                },
                {
                    value: 'Matemáticas + Estadística',
                    label: 'Matemáticas + Estadística',
                },
                {
                    value: 'Matemáticas + Física',
                    label: 'Matemáticas + Física',
                },
                {
                    value: 'Matemáticas + Ingeniería Civil',
                    label: 'Matemáticas + Ingeniería Civil',
                },
                {
                    value: 'Matemáticas + Ingeniería de Tecnologías y Servicios de Telecomunicación',
                    label: 'Matemáticas + Ingeniería de Tecnologías y Servicios de Telecomunicación',
                },
                {
                    value: 'Matemáticas + Ingeniería Informática',
                    label: 'Matemáticas + Ingeniería Informática',
                },
                {
                    value: 'Matemáticas + Ingeniería Informática de Servicios y Aplicaciones',
                    label: 'Matemáticas + Ingeniería Informática de Servicios y Aplicaciones',
                },
                {
                    value: 'Matemáticas + Ingeniería Telemática',
                    label: 'Matemáticas + Ingeniería Telemática',
                },
                {
                    value: 'Matemáticas Aplicadas + Física Aplicada',
                    label: 'Matemáticas Aplicadas + Física Aplicada',
                },
                {
                    value: 'Negocio Digital e Innovación en Turismo + Turismo',
                    label: 'Negocio Digital e Innovación en Turismo + Turismo',
                },
                {
                    value: 'Nutrición Humana y Dietética + Ciencia y Tecnología de los Alimentos',
                    label: 'Nutrición Humana y Dietética + Ciencia y Tecnología de los Alimentos',
                },
                {
                    value: 'Nutrición Humana y Dietética + Ciencias de la Actividad Física y del Deporte',
                    label: 'Nutrición Humana y Dietética + Ciencias de la Actividad Física y del Deporte',
                },
                {
                    value: 'Nutrición Humana y Dietética + Enfermería',
                    label: 'Nutrición Humana y Dietética + Enfermería',
                },
                {
                    value: 'Nutrición Humana y Dietética + Fisioterapia',
                    label: 'Nutrición Humana y Dietética + Fisioterapia',
                },
                {
                    value: 'Nutrición Humana y Dietética + Gastronomía',
                    label: 'Nutrición Humana y Dietética + Gastronomía',
                },
                {
                    value: 'Nutrición Humana y Dietética + Ingeniería de las Industrias Agrarias y Alimentarias',
                    label: 'Nutrición Humana y Dietética + Ingeniería de las Industrias Agrarias y Alimentarias',
                },
                {
                    value: 'Nutrición Humana y Dietética + Tecnología de los Alimentos',
                    label: 'Nutrición Humana y Dietética + Tecnología de los Alimentos',
                },
                {
                    value: 'Pedagogía + Educación Infantil',
                    label: 'Pedagogía + Educación Infantil',
                },
                {
                    value: 'Pedagogía + Educación Primaria',
                    label: 'Pedagogía + Educación Primaria',
                },
                {
                    value: 'Pedagogía + Información y Documentación',
                    label: 'Pedagogía + Información y Documentación',
                },
                {
                    value: 'Pedagogía + Maestro en Educación Infantil',
                    label: 'Pedagogía + Maestro en Educación Infantil',
                },
                {
                    value: 'Pedagogía + Maestro en Educación Primaria',
                    label: 'Pedagogía + Maestro en Educación Primaria',
                },
                {
                    value: 'Periodismo + Ciencias Políticas',
                    label: 'Periodismo + Ciencias Políticas',
                },
                {
                    value: 'Periodismo + Ciencias Políticas y Relaciones Internacionales',
                    label: 'Periodismo + Ciencias Políticas y Relaciones Internacionales',
                },
                {
                    value: 'Periodismo + Comunicación Audiovisual',
                    label: 'Periodismo + Comunicación Audiovisual',
                },
                {
                    value: 'Periodismo + Comunicación Corporativa, Protocolo y Organización de Eventos',
                    label: 'Periodismo + Comunicación Corporativa, Protocolo y Organización de Eventos',
                },
                {
                    value: 'Periodismo + Gestión de la Comunicación',
                    label: 'Periodismo + Gestión de la Comunicación',
                },
                {
                    value: 'Periodismo + Humanidades',
                    label: 'Periodismo + Humanidades',
                },
                {
                    value: 'Periodismo + Información y Documentación',
                    label: 'Periodismo + Información y Documentación',
                },
                {
                    value: 'Periodismo + Publicidad y Relaciones Públicas',
                    label: 'Periodismo + Publicidad y Relaciones Públicas',
                },
                {
                    value: 'Periodismo + Relaciones Internacionales',
                    label: 'Periodismo + Relaciones Internacionales',
                },
                {
                    value: 'Periodismo + Relaciones Internacionales y UE',
                    label: 'Periodismo + Relaciones Internacionales y UE',
                },
                {
                    value: 'Periodismo y Comunicación Corporativa + Comunicación Audiovisual',
                    label: 'Periodismo y Comunicación Corporativa + Comunicación Audiovisual',
                },
                {
                    value: 'Periodismo y Comunicación Corporativa + Relaciones Internacionales',
                    label: 'Periodismo y Comunicación Corporativa + Relaciones Internacionales',
                },
                {
                    value: 'Periodismo y Medios Digitales + Relaciones Internacionales',
                    label: 'Periodismo y Medios Digitales + Relaciones Internacionales',
                },
                {
                    value: 'Podología + Enfermería',
                    label: 'Podología + Enfermería',
                },
                {
                    value: 'Podología + Fisioterapia',
                    label: 'Podología + Fisioterapia',
                },
                {
                    value: 'Psicología + Administración y Dirección de Empresas',
                    label: 'Psicología + Administración y Dirección de Empresas',
                },
                {
                    value: 'Psicología + Criminología',
                    label: 'Psicología + Criminología',
                },
                {
                    value: 'Psicología + Criminología y Seguridad',
                    label: 'Psicología + Criminología y Seguridad',
                },
                {
                    value: 'Psicología + Derecho',
                    label: 'Psicología + Derecho',
                },
                {
                    value: 'Psicología + Filosofía',
                    label: 'Psicología + Filosofía',
                },
                {
                    value: 'Psicología + Logopedia',
                    label: 'Psicología + Logopedia',
                },
                {
                    value: 'Publicidad + Comunicación Audiovisual',
                    label: 'Publicidad + Comunicación Audiovisual',
                },
                {
                    value: 'Publicidad + Diseño Gráfico Digital',
                    label: 'Publicidad + Diseño Gráfico Digital',
                },
                {
                    value: 'Publicidad + Marketing',
                    label: 'Publicidad + Marketing',
                },
                {
                    value: 'Publicidad Creativa + Protocolo y Organización de Eventos',
                    label: 'Publicidad Creativa + Protocolo y Organización de Eventos',
                },
                {
                    value: 'Publicidad y Relaciones Públicas + Administración y Dirección de Empresas',
                    label: 'Publicidad y Relaciones Públicas + Administración y Dirección de Empresas',
                },
                {
                    value: 'Publicidad y Relaciones Públicas + Comunicación Audiovisual',
                    label: 'Publicidad y Relaciones Públicas + Comunicación Audiovisual',
                },
                {
                    value: 'Publicidad y Relaciones Públicas + Comunicación Corporativa, Protocolo y Organización de Eventos',
                    label: 'Publicidad y Relaciones Públicas + Comunicación Corporativa, Protocolo y Organización de Eventos',
                },
                {
                    value: 'Publicidad y Relaciones Públicas + Diseño Digital y Multimedia',
                    label: 'Publicidad y Relaciones Públicas + Diseño Digital y Multimedia',
                },
                {
                    value: 'Publicidad y Relaciones Públicas + Marketing',
                    label: 'Publicidad y Relaciones Públicas + Marketing',
                },
                {
                    value: 'Publicidad y Relaciones Públicas + Marketing e Investigación de Mercados',
                    label: 'Publicidad y Relaciones Públicas + Marketing e Investigación de Mercados',
                },
                {
                    value: 'Publicidad y Relaciones Públicas + Marketing y Comunicación',
                    label: 'Publicidad y Relaciones Públicas + Marketing y Comunicación',
                },
                {
                    value: 'Publicidad y Relaciones Públicas + Marketing y Gestión Comercial',
                    label: 'Publicidad y Relaciones Públicas + Marketing y Gestión Comercial',
                },
                {
                    value: 'Publicidad y Relaciones Públicas + Periodismo',
                    label: 'Publicidad y Relaciones Públicas + Periodismo',
                },
                {
                    value: 'Publicidad y Relaciones Públicas + Turismo',
                    label: 'Publicidad y Relaciones Públicas + Turismo',
                },
                {
                    value: 'Publicidad, Relaciones Públicas y Marketing + Comunicación Audiovisual',
                    label: 'Publicidad, Relaciones Públicas y Marketing + Comunicación Audiovisual',
                },
                {
                    value: 'Publicidad, Relaciones Públicas y Marketing + Periodismo y Comunicación Corporativa',
                    label: 'Publicidad, Relaciones Públicas y Marketing + Periodismo y Comunicación Corporativa',
                },
                {
                    value: 'Química + Biología',
                    label: 'Química + Biología',
                },
                {
                    value: 'Química + Bioquímica',
                    label: 'Química + Bioquímica',
                },
                {
                    value: 'Química + Enología',
                    label: 'Química + Enología',
                },
                {
                    value: 'Química + Física',
                    label: 'Química + Física',
                },
                {
                    value: 'Química + Ingeniería de Materiales',
                    label: 'Química + Ingeniería de Materiales',
                },
                {
                    value: 'Química + Ingeniería Química',
                    label: 'Química + Ingeniería Química',
                },
                {
                    value: 'Química Industriales + Administración y Dirección de Empresas',
                    label: 'Química Industriales + Administración y Dirección de Empresas',
                },
                {
                    value: 'Relaciones Internacionales + Ciencia Política y Gestión Pública',
                    label: 'Relaciones Internacionales + Ciencia Política y Gestión Pública',
                },
                {
                    value: 'Relaciones Internacionales + Ciencias Políticas y de la Administración',
                    label: 'Relaciones Internacionales + Ciencias Políticas y de la Administración',
                },
                {
                    value: 'Relaciones Internacionales + Comunicación Corporativa, Protocolo y Organización de Eventos',
                    label: 'Relaciones Internacionales + Comunicación Corporativa, Protocolo y Organización de Eventos',
                },
                {
                    value: 'Relaciones Internacionales + Comunicación Internacional',
                    label: 'Relaciones Internacionales + Comunicación Internacional',
                },
                {
                    value: 'Relaciones Internacionales + Derecho',
                    label: 'Relaciones Internacionales + Derecho',
                },
                {
                    value: 'Relaciones Internacionales + Economía',
                    label: 'Relaciones Internacionales + Economía',
                },
                {
                    value: 'Relaciones Internacionales + Filosofía, Política y Economía',
                    label: 'Relaciones Internacionales + Filosofía, Política y Economía',
                },
                {
                    value: 'Relaciones Internacionales + Historia',
                    label: 'Relaciones Internacionales + Historia',
                },
                {
                    value: 'Relaciones Internacionales + Lenguas Modernas',
                    label: 'Relaciones Internacionales + Lenguas Modernas',
                },
                {
                    value: 'Relaciones Internacionales + Periodismo',
                    label: 'Relaciones Internacionales + Periodismo',
                },
                {
                    value: 'Relaciones Internacionales + Seguridad',
                    label: 'Relaciones Internacionales + Seguridad',
                },
                {
                    value: 'Relaciones Internacionales + Traducción e Interpretación',
                    label: 'Relaciones Internacionales + Traducción e Interpretación',
                },
                {
                    value: 'Relaciones Internacionales + Turismo',
                    label: 'Relaciones Internacionales + Turismo',
                },
                {
                    value: 'Relaciones Laborales y Recursos Humanos + Administración y Dirección de Empresas',
                    label: 'Relaciones Laborales y Recursos Humanos + Administración y Dirección de Empresas',
                },
                {
                    value: 'Relaciones Laborales y Recursos Humanos + Trabajo Social',
                    label: 'Relaciones Laborales y Recursos Humanos + Trabajo Social',
                },
                {
                    value: 'Sociología + Ciencia Política y Administración Pública',
                    label: 'Sociología + Ciencia Política y Administración Pública',
                },
                {
                    value: 'Sociología + Ciencia Política y de la Administración',
                    label: 'Sociología + Ciencia Política y de la Administración',
                },
                {
                    value: 'Sociología + Ciencias Políticas y de la Administración',
                    label: 'Sociología + Ciencias Políticas y de la Administración',
                },
                {
                    value: 'Sociología + Ciencias Políticas y de la Administración Pública',
                    label: 'Sociología + Ciencias Políticas y de la Administración Pública',
                },
                {
                    value: 'Sociología + Relaciones Internacionales',
                    label: 'Sociología + Relaciones Internacionales',
                },
                {
                    value: 'Terapia Ocupacional + Enfermería',
                    label: 'Terapia Ocupacional + Enfermería',
                },
                {
                    value: 'Terapia Ocupacional + Psicología',
                    label: 'Terapia Ocupacional + Psicología',
                },
                {
                    value: 'Trabajo Social + Educación Social',
                    label: 'Trabajo Social + Educación Social',
                },
                {
                    value: 'Trabajo Social + Sociología',
                    label: 'Trabajo Social + Sociología',
                },
                {
                    value: 'Traducción e Interpretación + Comunicación Internacional',
                    label: 'Traducción e Interpretación + Comunicación Internacional',
                },
                {
                    value: 'Traducción e Interpretación + Derecho',
                    label: 'Traducción e Interpretación + Derecho',
                },
                {
                    value: 'Traducción e Interpretación + Lenguas Aplicadas',
                    label: 'Traducción e Interpretación + Lenguas Aplicadas',
                },
                {
                    value: 'Traducción e Interpretación + Lenguas Modernas',
                    label: 'Traducción e Interpretación + Lenguas Modernas',
                },
                {
                    value: 'Traducción e Interpretación: Alemán + Relaciones Internacionales',
                    label: 'Traducción e Interpretación: Alemán + Relaciones Internacionales',
                },
                {
                    value: 'Traducción e Interpretación: Alemán + Turismo',
                    label: 'Traducción e Interpretación: Alemán + Turismo',
                },
                {
                    value: 'Traducción e Interpretación: en Inglés-Alemán + Inglés-Francés',
                    label: 'Traducción e Interpretación: en Inglés-Alemán + Inglés-Francés',
                },
                {
                    value: 'Traducción e Interpretación: Francés + Filología Hispánica',
                    label: 'Traducción e Interpretación: Francés + Filología Hispánica',
                },
                {
                    value: 'Traducción e Interpretación: Francés + Relaciones Internacionales',
                    label: 'Traducción e Interpretación: Francés + Relaciones Internacionales',
                },
                {
                    value: 'Traducción e Interpretación: Francés + Turismo',
                    label: 'Traducción e Interpretación: Francés + Turismo',
                },
                {
                    value: 'Traducción e Interpretación: Inglés + Estudios Ingleses',
                    label: 'Traducción e Interpretación: Inglés + Estudios Ingleses',
                },
                {
                    value: 'Traducción e Interpretación: Inglés + Filología Hispánica',
                    label: 'Traducción e Interpretación: Inglés + Filología Hispánica',
                },
                {
                    value: 'Traducción e Interpretación: Inglés + Turismo',
                    label: 'Traducción e Interpretación: Inglés + Turismo',
                },
                {
                    value: 'Traducción e Interpretación: Inglés-Alemán + Turismo',
                    label: 'Traducción e Interpretación: Inglés-Alemán + Turismo',
                },
                {
                    value: 'Turismo + Administración y Dirección de Empresas',
                    label: 'Turismo + Administración y Dirección de Empresas',
                },
                {
                    value: 'Turismo + Análisis de Negocios',
                    label: 'Turismo + Análisis de Negocios',
                },
                {
                    value: 'Turismo + Comercio',
                    label: 'Turismo + Comercio',
                },
                {
                    value: 'Turismo + Geografía e Historia',
                    label: 'Turismo + Geografía e Historia',
                },
                {
                    value: 'Turismo + Geografía, Territorio y Medio Ambiente',
                    label: 'Turismo + Geografía, Territorio y Medio Ambiente',
                },
                {
                    value: 'Turismo + Marketing',
                    label: 'Turismo + Marketing',
                },
                {
                    value: 'Turismo + Marketing y Dirección Comercial',
                    label: 'Turismo + Marketing y Dirección Comercial',
                },
                {
                    value: 'Turismo + Publicidad y Relaciones Públicas',
                    label: 'Turismo + Publicidad y Relaciones Públicas',
                },
                {
                    value: 'Turismo + Traducción e Interpretación: Francés',
                    label: 'Turismo + Traducción e Interpretación: Francés',
                },
                {
                    value: 'Turismo + Traducción e Interpretación: Inglés',
                    label: 'Turismo + Traducción e Interpretación: Inglés',
                },
                {
                    value: 'Turismo y Gestión del Ocio + Marketing y Comunidades Digitales',
                    label: 'Turismo y Gestión del Ocio + Marketing y Comunidades Digitales',
                },
                {
                    value: 'Veterinaria + Ciencia y Producción Animal',
                    label: 'Veterinaria + Ciencia y Producción Animal',
                },
            ],
        },

        // Opciones individuales al final (sin grupo)
        {
            value: 'Doctorado',
            label: 'Doctorado',
        },
        {
            value: 'Diplomatura',
            label: 'Diplomatura',
        },
        {
            value: 'Licenciatura',
            label: 'Licenciatura',
        },
    ];

    const disponibilidadOptions = [
        { value: 'Mañanas', label: 'Mañanas' },
        { value: 'Tardes', label: 'Tardes' },
        { value: 'Turno completo', label: 'Turno completo' },
        { value: 'Noches', label: 'Noches' },
        { value: '24 horas', label: '24 horas' },
    ];

    const carnetOptions = [
        {
            value: 'Sin carnet',
            label: 'Sin carnet',
        },
        { value: 'Moto AM (ciclomotores)', label: 'Moto AM (ciclomotores)' },
        { value: 'Moto A1 (-125 cc)', label: 'Moto A1 (-125 cc)' },
        { value: 'Moto A2 (max 35 kw)', label: 'Moto A2 (max 35 kw)' },
        { value: 'Coche B', label: 'Coche B' },
        { value: 'Coche B+E (- 3500kg)', label: 'Coche B+E (- 3500kg)' },
        { value: 'Camiones C1 (- 7500kg)', label: 'Camiones C1 (- 7500kg)' },
        {
            value: 'Camiones C2',
            label: 'Camiones C2',
        },
        {
            value: 'Camiones C+E',
            label: 'Camiones C+E',
        },
        {
            value: 'Autobuses D',
            label: 'Autobuses D',
        },
        {
            value: 'Mercancías peligrosas',
            label: 'Mercancías peligrosas',
        },
    ];

    const localidadOptions = [
        { value: '18132 - Agrón', label: '18132 - Agrón' },
        { value: '18520 - Alamedilla', label: '18520 - Alamedilla' },
        { value: '18220 - Albolote', label: '18220 - Albolote' },
        { value: '18004 - Albondón', label: '18004 - Albondón' },
        { value: '18518 - Albuñán', label: '18518 - Albuñán' },
        { value: '18700 - Albuñol', label: '18700 - Albuñol' },
        { value: '18659 - Albuñuelas', label: '18659 - Albuñuelas' },
        {
            value: '18518 - Alcudia de Guadix',
            label: '18518 - Alcudia de Guadix',
        },
        { value: '18514 - Aldeire', label: '18514 - Aldeire' },
        { value: '18170 - Alfacar', label: '18170 - Alfacar' },
        { value: '18280 - Algarinejo', label: '18280 - Algarinejo' },
        {
            value: '18120 - Alhama de Granada',
            label: '18120 - Alhama de Granada',
        },
        { value: '18620 - Alhendín', label: '18620 - Alhendín' },
        {
            value: '18568 - Alicún de Ortega',
            label: '18568 - Alicún de Ortega',
        },
        { value: '18438 - Almegíjar', label: '18438 - Almegíjar' },
        { value: '18690 - Almuñécar', label: '18690 - Almuñécar' },
        {
            value: '18450 - Alpujarra de la Sierra',
            label: '18450 - Alpujarra de la Sierra',
        },
        { value: '18518 - Alquife', label: '18518 - Alquife' },
        {
            value: '18102 - Ambroz (Vegas del Genil)',
            label: '18102 - Ambroz (Vegas del Genil)',
        },
        {
            value: '18240 - Anzola (Pinos Puente)',
            label: '18240 - Anzola (Pinos Puente)',
        },
        { value: '18126 - Arenas del Rey', label: '18126 - Arenas del Rey' },
        { value: '18100 - Armilla', label: '18100 - Armilla' },
        { value: '18230 - Atarfe', label: '18230 - Atarfe' },
        { value: '18800 - Baza', label: '18800 - Baza' },
        { value: '18184 - Beas de Granada', label: '18184 - Beas de Granada' },
        { value: '18516 - Beas de Guadix', label: '18516 - Beas de Guadix' },
        { value: '18510 - Benalúa', label: '18510 - Benalúa' },
        {
            value: '18566 - Benalúa de las Villas',
            label: '18566 - Benalúa de las Villas',
        },
        { value: '18817 - Benamaurel', label: '18817 - Benamaurel' },
        { value: '18451 - Bérchules', label: '18451 - Bérchules' },
        {
            value: '18004 - Bobadilla (Granada)',
            label: '18004 - Bobadilla (Granada)',
        },
        { value: '18568 - Bogarre (Píñar)', label: '18568 - Bogarre (Píñar)' },
        {
            value: '18293 - Brácana (Íllora)',
            label: '18293 - Brácana (Íllora)',
        },
        { value: '18412 - Bubión', label: '18412 - Bubión' },
        { value: '18416 - Busquístar', label: '18416 - Busquístar' },
        { value: '18125 - Cacín', label: '18125 - Cacín' },
        { value: '18440 - Cádiar', label: '18440 - Cádiar' },
        { value: '18199 - Cájar', label: '18199 - Cájar' },
        { value: '18518 - Calahorra, La', label: '18518 - Calahorra, La' },
        { value: '18290 - Calicasas', label: '18290 - Calicasas' },
        { value: '18565 - Campotéjar', label: '18565 - Campotéjar' },
        { value: '18810 - Caniles', label: '18810 - Caniles' },
        { value: '18418 - Cáñar', label: '18418 - Cáñar' },
        { value: '18413 - Capileira', label: '18413 - Capileira' },
        { value: '18413 - Carataunas', label: '18413 - Carataunas' },
        { value: '18439 - Cástaras', label: '18439 - Cástaras' },
        {
            value: '18740 - Castell de Ferro (Gualchos)',
            label: '18740 - Castell de Ferro (Gualchos)',
        },
        { value: '18818 - Castilléjar', label: '18818 - Castilléjar' },
        { value: '18816 - Castril', label: '18816 - Castril' },
        {
            value: '18190 - Cenes de la Vega',
            label: '18190 - Cenes de la Vega',
        },
        { value: '18330 - Chauchina', label: '18330 - Chauchina' },
        { value: '18329 - Chimeneas', label: '18329 - Chimeneas' },
        {
            value: '18194 - Churriana de la Vega',
            label: '18194 - Churriana de la Vega',
        },
        { value: '18339 - Cijuela', label: '18339 - Cijuela' },
        {
            value: '18518 - Cogollos de Guadix',
            label: '18518 - Cogollos de Guadix',
        },
        {
            value: '18197 - Cogollos de la Vega',
            label: '18197 - Cogollos de la Vega',
        },
        { value: '18564 - Colomera', label: '18564 - Colomera' },
        { value: '18813 - Cortes de Baza', label: '18813 - Cortes de Baza' },
        { value: '18517 - Cortes y Graena', label: '18517 - Cortes y Graena' },
        {
            value: '18813 - Cuevas del Campo',
            label: '18813 - Cuevas del Campo',
        },
        { value: '18850 - Cúllar', label: '18850 - Cúllar' },
        { value: '18195 - Cúllar Vega', label: '18195 - Cúllar Vega' },
        { value: '18518 - Darro', label: '18518 - Darro' },
        {
            value: '18518 - Dehesas de Guadix',
            label: '18518 - Dehesas de Guadix',
        },
        { value: '18567 - Dehesas Viejas', label: '18567 - Dehesas Viejas' },
        { value: '18570 - Deifontes', label: '18570 - Deifontes' },
        { value: '18568 - Diezma', label: '18568 - Diezma' },
        { value: '18152 - Dílar', label: '18152 - Dílar' },
        { value: '18512 - Dólar', label: '18512 - Dólar' },
        {
            value: '18567 - Domingo Pérez de Granada',
            label: '18567 - Domingo Pérez de Granada',
        },
        { value: '18152 - Dúdar', label: '18152 - Dúdar' },
        { value: '18650 - Dúrcal', label: '18650 - Dúrcal' },
        { value: '18130 - Escúzar', label: '18130 - Escúzar' },
        { value: '18513 - Ferreira', label: '18513 - Ferreira' },
        { value: '18515 - Fonelas', label: '18515 - Fonelas' },
        { value: '18812 - Freila', label: '18812 - Freila' },
        { value: '18340 - Fuente Vaqueros', label: '18340 - Fuente Vaqueros' },
        { value: '18110 - Gabias, Las', label: '18110 - Gabias, Las' },
        { value: '18840 - Galera', label: '18840 - Galera' },
        { value: '18562 - Gobernador', label: '18562 - Gobernador' },
        { value: '18150 - Gójar', label: '18150 - Gójar' },
        { value: '18870 - Gor', label: '18870 - Gor' },
        { value: '18890 - Gorafe', label: '18890 - Gorafe' },
        { value: '18001-18016 - Granada', label: '18001-18016 - Granada' },
        { value: '18569 - Guadahortuna', label: '18569 - Guadahortuna' },
        { value: '18500 - Guadix', label: '18500 - Guadix' },
        { value: '18615 - Guájares, Los', label: '18615 - Guájares, Los' },
        { value: '18740 - Gualchos', label: '18740 - Gualchos' },
        { value: '18160 - Güéjar Sierra', label: '18160 - Güéjar Sierra' },
        { value: '18212 - Güevéjar', label: '18212 - Güevéjar' },
        {
            value: '18697 - Herradura, La (Almuñécar)',
            label: '18697 - Herradura, La (Almuñécar)',
        },
        { value: '18518 - Huélago', label: '18518 - Huélago' },
        { value: '18512 - Huéneja', label: '18512 - Huéneja' },
        { value: '18830 - Huéscar', label: '18830 - Huéscar' },
        {
            value: '18183 - Huétor de Santillán',
            label: '18183 - Huétor de Santillán',
        },
        { value: '18360 - Huétor Tájar', label: '18360 - Huétor Tájar' },
        { value: '18198 - Huétor Vega', label: '18198 - Huétor Vega' },
        { value: '18260 - Íllora', label: '18260 - Íllora' },
        { value: '18612 - Ítrabo', label: '18612 - Ítrabo' },
        { value: '18550 - Iznalloz', label: '18550 - Iznalloz' },
        { value: '18127 - Játar', label: '18127 - Játar' },
        { value: '18127 - Jayena', label: '18127 - Jayena' },
        {
            value: '18518 - Jerez del Marquesado',
            label: '18518 - Jerez del Marquesado',
        },
        { value: '18699 - Jete', label: '18699 - Jete' },
        { value: '18213 - Jun', label: '18213 - Jun' },
        { value: '18452 - Juviles', label: '18452 - Juviles' },
        { value: '18327 - Láchar', label: '18327 - Láchar' },
        { value: '18420 - Lanjarón', label: '18420 - Lanjarón' },
        { value: '18518 - Lanteira', label: '18518 - Lanteira' },
        { value: '18656 - Lecrín', label: '18656 - Lecrín' },
        { value: '18699 - Lentegí', label: '18699 - Lentegí' },
        { value: '18449 - Lobras', label: '18449 - Lobras' },
        { value: '18300 - Loja', label: '18300 - Loja' },
        { value: '18518 - Lugros', label: '18518 - Lugros' },
        { value: '18697 - Lújar', label: '18697 - Lújar' },
        { value: '18130 - Malahá, La', label: '18130 - Malahá, La' },
        { value: '18200 - Maracena', label: '18200 - Maracena' },
        { value: '18516 - Marchal', label: '18516 - Marchal' },
        { value: '18247 - Moclín', label: '18247 - Moclín' },
        { value: '18611 - Molvízar', label: '18611 - Molvízar' },
        { value: '18193 - Monachil', label: '18193 - Monachil' },
        { value: '18270 - Montefrío', label: '18270 - Montefrío' },
        { value: '18561 - Montejícar', label: '18561 - Montejícar' },
        { value: '18569 - Montillana', label: '18569 - Montillana' },
        {
            value: '18370 - Moraleda de Zafayona',
            label: '18370 - Moraleda de Zafayona',
        },
        { value: '18563 - Morelábor', label: '18563 - Morelábor' },
        { value: '18600 - Motril', label: '18600 - Motril' },
        { value: '18490 - Murtas', label: '18490 - Murtas' },
        { value: '18494 - Nevada', label: '18494 - Nevada' },
        { value: '18657 - Nigüelas', label: '18657 - Nigüelas' },
        { value: '18214 - Nívar', label: '18214 - Nívar' },
        { value: '18151 - Ogíjares', label: '18151 - Ogíjares' },
        { value: '18858 - Orce', label: '18858 - Orce' },
        { value: '18400 - Órgiva', label: '18400 - Órgiva' },
        { value: '18698 - Otívar', label: '18698 - Otívar' },
        { value: '18630 - Otura', label: '18630 - Otura' },
        { value: '18640 - Padul', label: '18640 - Padul' },
        { value: '18411 - Pampaneira', label: '18411 - Pampaneira' },
        { value: '18530 - Pedro Martínez', label: '18530 - Pedro Martínez' },
        { value: '18210 - Peligros', label: '18210 - Peligros' },
        { value: '18517 - Peza, La', label: '18517 - Peza, La' },
        { value: '18658 - Pinar, El', label: '18658 - Pinar, El' },
        { value: '18191 - Pinos Genil', label: '18191 - Pinos Genil' },
        { value: '18240 - Pinos Puente', label: '18240 - Pinos Puente' },
        { value: '18568 - Píñar', label: '18568 - Píñar' },
        { value: '18516 - Polícar', label: '18516 - Polícar' },
        { value: '18750 - Polopos', label: '18750 - Polopos' },
        { value: '18415 - Pórtugos', label: '18415 - Pórtugos' },
        {
            value: '18820 - Puebla de Don Fadrique',
            label: '18820 - Puebla de Don Fadrique',
        },
        { value: '18197 - Pulianas', label: '18197 - Pulianas' },
        { value: '18519 - Purullena', label: '18519 - Purullena' },
        { value: '18192 - Quéntar', label: '18192 - Quéntar' },
        { value: '18711 - Rubite', label: '18711 - Rubite' },
        { value: '18310 - Salar', label: '18310 - Salar' },
        { value: '18680 - Salobreña', label: '18680 - Salobreña' },
        {
            value: '18129 - Santa Cruz del Comercio',
            label: '18129 - Santa Cruz del Comercio',
        },
        { value: '18320 - Santa Fe', label: '18320 - Santa Fe' },
        { value: '18410 - Soportújar', label: '18410 - Soportújar' },
        { value: '18713 - Sorvilán', label: '18713 - Sorvilán' },
        { value: '18414 - Taha, La', label: '18414 - Taha, La' },
        { value: '18563 - Torre-Cardela', label: '18563 - Torre-Cardela' },
        { value: '18430 - Torvizcón', label: '18430 - Torvizcón' },
        { value: '18417 - Trevélez', label: '18417 - Trevélez' },
        { value: '18498 - Turón', label: '18498 - Turón' },
        { value: '18480 - Ugíjar', label: '18480 - Ugíjar' },
        { value: '18250 - Valderrubio', label: '18250 - Valderrubio' },
        { value: '18658 - Valle, El', label: '18658 - Valle, El' },
        {
            value: '18511 - Valle del Zalabí',
            label: '18511 - Valle del Zalabí',
        },
        { value: '18470 - Válor', label: '18470 - Válor' },
        { value: '18102 - Vegas del Genil', label: '18102 - Vegas del Genil' },
        {
            value: '18670 - Vélez de Benaudalla',
            label: '18670 - Vélez de Benaudalla',
        },
        {
            value: '18131 - Ventas de Huelma',
            label: '18131 - Ventas de Huelma',
        },
        { value: '18630 - Villa de Otura', label: '18630 - Villa de Otura' },
        { value: '18659 - Villamena', label: '18659 - Villamena' },
        {
            value: '18539 - Villanueva de las Torres',
            label: '18539 - Villanueva de las Torres',
        },
        {
            value: '18369 - Villanueva Mesía',
            label: '18369 - Villanueva Mesía',
        },
        { value: '18179 - Víznar', label: '18179 - Víznar' },
        { value: '18128 - Zafarraya', label: '18128 - Zafarraya' },
        { value: '18311 - Zagra', label: '18311 - Zagra' },
        { value: '18140 - Zubia, La', label: '18140 - Zubia, La' },
        { value: '18811 - Zújar', label: '18811 - Zújar' },
    ];

    const sexoOptions = [
        { value: 'Hombre', label: 'Hombre' },
        { value: 'Mujer', label: 'Mujer' },
        { value: 'No binario', label: 'No binario' },
        { value: 'Otro', label: 'Otro' },
    ];

    const discaOptions = [
        { value: 'Sin discapacidad', label: 'Sin discapacidad' },
        { value: '33-65%', label: '33-65%' },
        { value: '66-100%', label: '66-100%' },
    ];

    const vehiculoOptions = [
        { value: 'Sí', label: 'Sí' },
        { value: 'No', label: 'No' },
    ];

    const programaOptions = [
        {
            value: 'Proyectos integrales vulnerables',
            label: 'Proyectos integrales vulnerables',
        },
        {
            value: 'Proyectos integrales jóvenes',
            label: 'Proyectos integrales jóvenes',
        },
        {
            value: 'EPES',
            label: 'EPES',
        },
        {
            value: 'Andalucía orienta',
            label: 'Andalucía orienta',
        },
        {
            value: 'FPE',
            label: 'FPE',
        },
    ];

    function formatearFecha(fecha) {
        // Separamos la fecha en día, mes y año usando el carácter "/"
        const [dia, mes, anio] = fecha.split('/');
        // Devolvemos la fecha en el nuevo formato
        return `${anio}-${mes}-${dia}`;
    }

    const [documentos, setDocumentos] = useState([]);
    const actualYear = new Date().getFullYear();
    const regExpTlf = new RegExp(/^\d{9}$/);
    const regExpDNI = new RegExp(/\d{8}[A-Z]|[A-Z]\d{8}/);

    // Esta funcion se encarga de recoger el usuario seleccionado y preparar el formulario de modificación.
    const modificarUsuario = (idUsuario) => async () => {
        if (!idUsuario) {
            return;
        } else {
            try {
                // Para llamar a la base de datos y sacar la fecha,
                // ya que en la tabla solo se consta la edad actual, no la fecha de nacimiento.
                const response = await axios.get(`/usuario/${idUsuario}/edad`);
                const edadDB = response.data.edad;
                const responseFechaAct = await axios.get(
                    `/usuario/${idUsuario}/fecha-activacion`,
                );
                const fechaActDB = responseFechaAct.data.fecha_activacion;
                const specialtyResponse = await axios.get(
                    `/usuario_oal/${idUsuario}/specialties`,
                );
                const specialtiesDB = JSON.parse(
                    specialtyResponse.data.especialidades,
                );
                const carnetResponse = await axios.get(
                    `/usuario_oal/${idUsuario}/carnet`,
                );

                const carnetDB = JSON.parse(carnetResponse.data.carnet);
                let usuario = document.getElementById(idUsuario);
                let form = document.getElementById('editUsuario').children[1];

                // Si se va a añadir más campos al formulario, añadir el mismo nombre aquí y
                // asegura que usuarioId siempre se quede el último para no interferir en el
                // forEach de más abajo.

                const fields = [
                    'nombre',
                    'apellidos',
                    'sexo',
                    'edad',
                    'telefono',
                    'dni',
                    'fecha_activacion',
                    'ocupacion1',
                    'ocupacion2',
                    'ocupacion3',
                    'discapacidad',
                    'nivel_estudios',
                    'especialidad',
                    'formacion_complementaria',
                    'experiencia_laboral',
                    'programa_oal',
                    'año_programa_oal',
                    'programa_oal_2',
                    'año_programa_oal_2',
                    'programa_oal_3',
                    'año_programa_oal_3',
                    'disponibilidad',
                    'carnet',
                    'vehiculo',
                    'localidad',
                    'observaciones',
                    'usuarioId',
                    'documentos',
                ];

                // Se recorre los campos y en cada caso, actua para rellenarlo con datos.
                fields.forEach((field, index) => {
                    const childElement = usuario.children[index + 1];
                    const elementText = childElement
                        ? childElement.innerText
                        : '';
                    switch (field) {
                        case 'ocupacion1':
                            setValue2('ocupacion1', elementText);
                            break;
                        case 'ocupacion2':
                            setValue2('ocupacion2', elementText);
                            break;
                        case 'ocupacion3':
                            setValue2('ocupacion3', elementText);
                            break;
                        case 'disponibilidad':
                            setValue2('disponibilidad', elementText);
                            break;
                        case 'localidad':
                            setValue2('localidad', elementText);
                            break;
                        case 'carnet':
                            // eslint-disable-next-line no-case-declarations
                            const carnetArray = carnetDB;
                            // eslint-disable-next-line no-case-declarations
                            let selectedCarnets = [];

                            // Recorre el array de carnets del usuario
                            carnetArray.forEach((carnet) => {
                                // Busca la opción correspondiente en carnetOptions
                                const option = carnetOptions.find(
                                    (opt) => opt.value == carnet,
                                );
                                if (option) {
                                    selectedCarnets.push(option);
                                }
                            });

                            setValue2('carnet', selectedCarnets);
                            break;
                        case 'edad':
                            setValue2('edad', formatearFecha(edadDB));
                            document.getElementById('edadModificar').value =
                                formatearFecha(edadDB);
                            break;
                        case 'nombre':
                            setValue2('nombre', elementText);
                            form.querySelector(`[name="${field}"]`).value =
                                elementText;
                            break;
                        case 'apellidos':
                            setValue2('apellidos', elementText);
                            form.querySelector(`[name="${field}"]`).value =
                                elementText;
                            break;
                        case 'dni':
                            setValue2('dni', elementText);
                            form.querySelector(`[name="${field}"]`).value =
                                elementText;
                            break;
                        case 'telefono':
                            setValue2('telefono', elementText);
                            form.querySelector(`[name="${field}"]`).value =
                                elementText;
                            break;
                        case 'observaciones':
                            setValue2('observaciones', elementText);
                            form.querySelector(`[name="${field}"]`).value =
                                elementText;
                            break;
                        case 'usuarioId':
                            setValue2(
                                'usuarioId',
                                usuario.children[0].innerText,
                            );
                            form.querySelector(`[name="${field}"]`).value =
                                usuario.children[0].innerText;
                            break;
                        case 'sexo':
                            setValue2('sexo', elementText);
                            break;
                        case 'discapacidad':
                            setValue2('discapacidad', elementText);
                            break;
                        case 'documentos':
                            axios
                                .get(`/usuario_oal/${idUsuario}/docs`)
                                .then((response) => {
                                    setDocumentos(response.data);
                                });
                            break;
                        case 'programa_oal':
                            setValue2('programa_oal', elementText);
                            break;
                        case 'programa_oal_2':
                            setValue2('programa_oal_2', elementText);
                            break;
                        case 'programa_oal_3':
                            setValue2('programa_oal_3', elementText);
                            break;
                        case 'vehiculo':
                            setValue2('vehiculo', elementText);
                            break;
                        case 'fecha_activacion':
                            setValue2(
                                'fecha_activacion',
                                formatearFecha(fechaActDB),
                            );
                            document.getElementById('fecha_activacion').value =
                                formatearFecha(fechaActDB);
                            break;
                        case 'año_programa_oal':
                            setValue2('año_programa_oal', elementText);
                            form.querySelector(`[name="${field}"]`).value =
                                elementText;
                            break;
                        case 'año_programa_oal_2':
                            setValue2('año_programa_oal_2', elementText);
                            form.querySelector(`[name="${field}"]`).value =
                                elementText;
                            break;
                        case 'año_programa_oal_3':
                            setValue2('año_programa_oal_3', elementText);
                            form.querySelector(`[name="${field}"]`).value =
                                elementText;
                            break;
                        case 'nivel_estudios':
                            setValue2('estudios', elementText);
                            break;
                        case 'especialidad':
                            // eslint-disable-next-line no-case-declarations
                            const specialtiesArray = specialtiesDB;
                            // eslint-disable-next-line no-case-declarations
                            let selectedSpecialties = [];

                            // Recorre el array de especialidades del usuario
                            specialtiesArray.forEach((specialty) => {
                                // Busca primero en las opciones no agrupadas
                                let option = specialtyOptions.find(
                                    (opt) => opt.value === specialty,
                                );

                                // Si no se encuentra en las opciones principales, busca en los grupos
                                if (!option) {
                                    specialtyOptions.forEach((group) => {
                                        if (group.options) {
                                            const groupOption =
                                                group.options.find(
                                                    (opt) =>
                                                        opt.value === specialty,
                                                );
                                            if (groupOption) {
                                                selectedSpecialties.push(
                                                    groupOption,
                                                );
                                            }
                                        }
                                    });
                                } else {
                                    selectedSpecialties.push(option);
                                }
                            });

                            setValue2('especialidad', selectedSpecialties);
                            break;
                        case 'formacion_complementaria':
                            setValue2('formacion_comp', elementText);
                            break;
                        case 'experiencia_laboral':
                            setValue2('experiencia', elementText);
                            break;
                        default:
                            console.error('Error en la función');
                            break;
                    }
                });

                document
                    .getElementById('createUsuario')
                    .setAttribute('style', 'display: none !important');
                document
                    .getElementById('editUsuario')
                    .setAttribute('style', 'display: block !important');
            } catch (error) {
                console.error('Error en la función:', error);
            }
        }
    };

    // Función para convertir la fecha que se pasa (dd/mm/YYYY) a los años que correspondientes.
    const convertirEdad = (fecha) => {
        const partes = fecha.split('/');
        if (partes.length !== 3) return NaN;

        const dia = parseInt(partes[0], 10);
        const mes = parseInt(partes[1], 10) - 1;
        const anio = parseInt(partes[2], 10);

        const fechaNacimiento = new Date(anio, mes, dia);
        if (isNaN(fechaNacimiento.getTime())) return NaN;

        const hoy = new Date();
        let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
        const diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth();

        // Ajustar si aún no ha pasado el mes o el día del cumpleaños
        if (
            diferenciaMeses < 0 ||
            (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())
        ) {
            edad--;
        }

        return edad;
    };

    const formatoFechaSimple = (fechaISO) => {
        const [anio, mes, dia] = fechaISO.split('-');
        return `${dia.padStart(2, '0')}/${mes.padStart(2, '0')}/${anio}`;
    };

    //Funcion para eliminar al usuario desde UsuarioOALController::destroy
    const { delete: destroy } = useFormInertia();

    function handleEliminarUsuario(idUsuario) {
        destroy(`/usuario_oal/${idUsuario}`);
    }

    function handleEliminarDocumento(idDoc) {
        router.delete(`/documento/${idDoc}`, {
            onSuccess: () => {
                setDocumentos((prevDocs) =>
                    //Este filtrado permite eliminar del DOM los archivos que hayan sido eliminados.
                    prevDocs.filter((doc) => doc.id !== idDoc),
                );
            },
        });
    }

    return (
        <>
            <div className="container" id="editUsuario">
                <div className="d-flex justify-content-center">
                    <NavLink className="fs-3 my-3" href={route('dashboard')}>
                        Añadir usuario
                    </NavLink>
                </div>

                <Form
                    className="border-bottom pb-4"
                    onSubmit={handleSubmit2(async (data) => {
                        let specialtyArray = [];
                        for (const element of data.especialidad) {
                            specialtyArray.push(element.value);
                        }
                        let carnetArray = [];
                        for (const element of data.carnet) {
                            carnetArray.push(element.value);
                        }

                        let newData = {
                            nombre: data.nombre,
                            apellidos: data.apellidos,
                            sexo: data.sexo,
                            edad: formatoFechaSimple(data.edad),
                            telefono: data.telefono,
                            dni: data.dni,
                            fecha_activacion: formatoFechaSimple(
                                data.fecha_activacion,
                            ),
                            ocupacion: data.ocupacion1,
                            ocupacion2: data.ocupacion2,
                            ocupacion3: data.ocupacion3,
                            discapacidad: data.discapacidad,
                            nivel_estudios: data.estudios,
                            especialidad: JSON.stringify(specialtyArray),
                            formacion_complementaria: data.formacion_comp,
                            experiencia_laboral: data.experiencia,
                            disponibilidad: data.disponibilidad,
                            carnet: JSON.stringify(carnetArray),
                            vehiculo: data.vehiculo,
                            localidad: data.localidad,
                            observaciones: data.observaciones
                                ? data.observaciones
                                : '',
                            programa_oal: data.programa_oal,
                            año_programa_oal: data.año_programa_oal,
                            programa_oal_2: data.programa_oal_2,
                            año_programa_oal_2: data.año_programa_oal_2,
                            programa_oal_3: data.programa_oal_3,
                            año_programa_oal_3: data.año_programa_oal_3,
                        };

                        await router.put(
                            `/usuario_oal/${data.usuarioId}`,
                            newData,
                        );

                        await router.post(
                            '/usuario_oal/adddocs',
                            {
                                id: data.usuarioId,
                                docs: data.documentos,
                            },
                            {
                                preserveScroll: true,
                                preserveState: false,
                            },
                        );
                    })}
                    noValidate
                >
                    <div className="d-flex justify-content-evenly">
                        <div className="container mx-5">
                            <Form.Group className="mb-3" controlId="formNombre">
                                <Form.Label className="fs-4">Nombre</Form.Label>
                                <Form.Control
                                    type="text"
                                    {...register2('nombre', {
                                        required:
                                            'Este campo es obligatorio (Nombre)',
                                    })}
                                    className="mx-auto"
                                />
                                <Form.Text className="text-danger">
                                    {errors.nombre?.message}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="formApellidos"
                            >
                                <Form.Label className="fs-4">
                                    Apellidos
                                </Form.Label>
                                <Form.Control
                                    {...register2('apellidos', {
                                        required:
                                            'Este campo es obligatorio (Apellidos)',
                                    })}
                                    type="text"
                                    className="mx-auto"
                                    required
                                />
                                <Form.Text className="text-danger">
                                    {errors.apellidos?.message}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formSexo">
                                <Form.Label className="fs-4">Sexo</Form.Label>
                                <Controller
                                    name="sexo"
                                    control={control2}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            options={sexoOptions}
                                            placeholder="Selecciona un sexo"
                                            noOptionsMessage={() =>
                                                'No se ha encontrado dicha opción'
                                            }
                                            value={
                                                sexoOptions.find(
                                                    (opt) =>
                                                        opt.value ===
                                                        field.value,
                                                ) || null
                                            }
                                            onChange={(option) =>
                                                field.onChange(
                                                    option ? option.value : '',
                                                )
                                            }
                                            required
                                        />
                                    )}
                                />
                                <Form.Text className="text-danger">
                                    {errors.sexo?.message}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formEdad">
                                <Form.Label className="fs-4">Edad</Form.Label>
                                <input
                                    {...register2('edad', {
                                        required:
                                            'Este campo es obligatorio (Edad)',
                                    })}
                                    id="edadModificar"
                                    className="form-control"
                                    type="date"
                                    name="edad"
                                    required
                                />
                                <Form.Text className="text-danger">
                                    {errors.edad?.message}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="formTelefono"
                            >
                                <Form.Label className="fs-4">
                                    Teléfono
                                </Form.Label>
                                <Form.Control
                                    {...register2('telefono', {
                                        required:
                                            'Este campo es obligatorio (Telefono)',
                                        pattern: {
                                            value: regExpTlf,
                                            message:
                                                'El teléfono debe tener 9 dígitos',
                                        },
                                    })}
                                    type="text"
                                    className="mx-auto"
                                    required
                                />
                                <Form.Text className="text-danger">
                                    {errors.telefono?.message}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formDni">
                                <Form.Label className="fs-4">
                                    DNI/NIE
                                </Form.Label>
                                <Form.Control
                                    {...register2('dni', {
                                        required:
                                            'Este campo es obligatorio (DNI/NIE)',
                                        pattern: {
                                            value: regExpDNI,
                                            message:
                                                'El formato deberá ser tipo 12345678X o B12345678',
                                        },
                                    })}
                                    type="text"
                                    className="mx-auto"
                                    required
                                />
                                <Form.Text className="text-danger">
                                    {errors.dni?.message}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="formFechaActivacion"
                            >
                                <Form.Label className="fs-4">
                                    Fecha de activación
                                </Form.Label>
                                <input
                                    {...register2('fecha_activacion', {
                                        required:
                                            'Este campo es obligatorio (Fecha de activación)',
                                    })}
                                    id="fecha_activacion"
                                    className="form-control"
                                    type="date"
                                    name="fecha_activacion"
                                    required
                                />
                                <Form.Text className="text-danger">
                                    {errors.fecha_activacion?.message}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="formOcupacion1"
                            >
                                <Form.Label className="fs-4">
                                    Ocupacion 1
                                </Form.Label>
                                <Controller
                                    name="ocupacion1"
                                    control={control2}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            options={ocupacionOptions}
                                            placeholder="Selecciona una profesión"
                                            noOptionsMessage={() =>
                                                'No se ha encontrado dicha profesión'
                                            }
                                            value={
                                                ocupacionOptions.find(
                                                    (opt) =>
                                                        opt.value ===
                                                        field.value,
                                                ) || null
                                            }
                                            onChange={(option) =>
                                                field.onChange(
                                                    option ? option.value : '',
                                                )
                                            }
                                            required
                                        />
                                    )}
                                />
                                <Form.Text className="text-danger">
                                    {errors.ocupacion1?.message}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="formOcupacion2"
                            >
                                <Form.Label className="fs-4">
                                    Ocupacion 2 (opcional)
                                </Form.Label>
                                <Controller
                                    name="ocupacion2"
                                    control={control2}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            options={ocupacionOptions}
                                            placeholder="Selecciona una profesión"
                                            noOptionsMessage={() =>
                                                'No se ha encontrado dicha profesión'
                                            }
                                            value={
                                                ocupacionOptions.find(
                                                    (opt) =>
                                                        opt.value ===
                                                        field.value,
                                                ) || null
                                            }
                                            onChange={(option) =>
                                                field.onChange(
                                                    option ? option.value : '',
                                                )
                                            }
                                        />
                                    )}
                                />
                                <Form.Text className="text-danger">
                                    {errors.ocupacion2?.message}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="formOcupacion3"
                            >
                                <Form.Label className="fs-4">
                                    Ocupacion 3 (opcional)
                                </Form.Label>
                                <Controller
                                    name="ocupacion3"
                                    control={control2}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            options={ocupacionOptions}
                                            placeholder="Selecciona una profesión"
                                            noOptionsMessage={() =>
                                                'No se ha encontrado dicha profesión'
                                            }
                                            value={
                                                ocupacionOptions.find(
                                                    (opt) =>
                                                        opt.value ===
                                                        field.value,
                                                ) || null
                                            }
                                            onChange={(option) =>
                                                field.onChange(
                                                    option ? option.value : '',
                                                )
                                            }
                                        />
                                    )}
                                />
                                <Form.Text className="text-danger">
                                    {errors.ocupacion3?.message}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="formDiscapacidad"
                            >
                                <Form.Label className="fs-4">
                                    Discapacidad
                                </Form.Label>
                                <Controller
                                    name="discapacidad"
                                    control={control2}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            options={discaOptions}
                                            placeholder="Seleccione una opción"
                                            noOptionsMessage={() =>
                                                'No se ha encontrado dicha opción'
                                            }
                                            value={
                                                discaOptions.find(
                                                    (opt) =>
                                                        opt.value ===
                                                        field.value,
                                                ) || null
                                            }
                                            onChange={(option) =>
                                                field.onChange(
                                                    option ? option.value : '',
                                                )
                                            }
                                            required
                                        />
                                    )}
                                />
                                <Form.Text className="text-danger">
                                    {errors.discapacidad?.message}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="formEstudios"
                            >
                                <Form.Label className="fs-4">
                                    Nivel de estudios
                                </Form.Label>
                                <Controller
                                    name="estudios"
                                    control={control2}
                                    rules={{
                                        required: true,
                                    }}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            options={estudiosOptions}
                                            placeholder="Selecciona tu nivel de estudios más alto"
                                            noOptionsMessage={() =>
                                                'No se ha encontrado dicho estudio'
                                            }
                                            value={
                                                estudiosOptions.find(
                                                    (opt) =>
                                                        opt.value ===
                                                        field.value,
                                                ) || null
                                            }
                                            onChange={(option) =>
                                                field.onChange(
                                                    option ? option.value : '',
                                                )
                                            }
                                        />
                                    )}
                                />
                                <Form.Text className="text-danger">
                                    {errors.estudios &&
                                        'Ha habido un error: ' +
                                            errors.estudios.message +
                                            '.'}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="formSpecialty"
                            >
                                <Form.Label className="fs-4">
                                    Especialidad
                                </Form.Label>
                                <Controller
                                    name="especialidad"
                                    control={control2}
                                    rules={{
                                        required: true,
                                    }}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            options={specialtyOptions}
                                            placeholder="Selecciona tu especialidad"
                                            noOptionsMessage={() =>
                                                'No se ha encontrado dicho estudio'
                                            }
                                            isMulti
                                            value={field.value || []}
                                            onChange={(selectedOptions) => {
                                                field.onChange(
                                                    selectedOptions || [],
                                                );
                                            }}
                                        />
                                    )}
                                />
                                <Form.Text className="text-danger">
                                    {errors.especialidad &&
                                        'Ha habido un error: ' +
                                            errors.especialidad.message +
                                            '.'}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="formComplementario"
                            >
                                <Form.Label className="fs-4">
                                    Formación complementaria (opcional)
                                </Form.Label>
                                <Form.Control
                                    {...register2('formacion_comp')}
                                    as="textarea"
                                    placeholder="Añada si tiene alguna formación complementaria"
                                    rows={3}
                                />
                            </Form.Group>
                        </div>
                        <div className="container mx-5">
                            <Form.Group
                                className="mb-3"
                                controlId="formExperiencia"
                            >
                                <Form.Label className="fs-4">
                                    Experiencia laboral
                                </Form.Label>
                                <Form.Control
                                    {...register2('experiencia')}
                                    as="textarea"
                                    placeholder="Añada si tiene alguna experiencia laboral"
                                    rows={3}
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="formPrograma"
                            >
                                <Form.Label className="fs-4">
                                    Programa (opcional)
                                </Form.Label>
                                <Controller
                                    name="programa_oal"
                                    control={control2}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            options={programaOptions}
                                            placeholder="Selecciona un programa"
                                            noOptionsMessage={() =>
                                                'No existe el programa introducido'
                                            }
                                            value={
                                                programaOptions.find(
                                                    (opt) =>
                                                        opt.value ===
                                                        field.value,
                                                ) || null
                                            }
                                            onChange={(option) =>
                                                field.onChange(
                                                    option ? option.value : '',
                                                )
                                            }
                                        />
                                    )}
                                />
                                <Form.Text className="text-danger">
                                    {errors.programa_oal?.message}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="formAñoPrograma"
                            >
                                <Form.Label className="fs-4">
                                    Año Programa (opcional)
                                </Form.Label>
                                <Form.Control
                                    type="number"
                                    as="input"
                                    {...register2('año_programa_oal')}
                                    min={1900}
                                    max={actualYear}
                                />
                                <Form.Text className="text-danger">
                                    {errors.año_programa_oal?.message}
                                </Form.Text>
                            </Form.Group>

                            <Form.Group
                                className="mb-3"
                                controlId="formPrograma2"
                            >
                                <Form.Label className="fs-4">
                                    Programa 2 (opcional)
                                </Form.Label>
                                <Controller
                                    name="programa_oal_2"
                                    control={control2}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            options={programaOptions}
                                            placeholder="Selecciona un programa"
                                            noOptionsMessage={() =>
                                                'No existe el programa introducido'
                                            }
                                            value={
                                                programaOptions.find(
                                                    (opt) =>
                                                        opt.value ===
                                                        field.value,
                                                ) || null
                                            }
                                            onChange={(option) =>
                                                field.onChange(
                                                    option ? option.value : '',
                                                )
                                            }
                                        />
                                    )}
                                />
                                <Form.Text className="text-danger">
                                    {errors.programa_oal_2?.message}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="formAñoPrograma2"
                            >
                                <Form.Label className="fs-4">
                                    Año Programa 2 (opcional)
                                </Form.Label>
                                <Form.Control
                                    type="number"
                                    as="input"
                                    {...register2('año_programa_oal_2')}
                                    min={1900}
                                    max={actualYear}
                                />
                                <Form.Text className="text-danger">
                                    {errors.año_programa_oal_2?.message}
                                </Form.Text>
                            </Form.Group>

                            <Form.Group
                                className="mb-3"
                                controlId="formPrograma3"
                            >
                                <Form.Label className="fs-4">
                                    Programa 3 (opcional)
                                </Form.Label>
                                <Controller
                                    name="programa_oal_3"
                                    control={control2}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            options={programaOptions}
                                            placeholder="Selecciona un programa"
                                            noOptionsMessage={() =>
                                                'No existe el programa introducido'
                                            }
                                            value={
                                                programaOptions.find(
                                                    (opt) =>
                                                        opt.value ===
                                                        field.value,
                                                ) || null
                                            }
                                            onChange={(option) =>
                                                field.onChange(
                                                    option ? option.value : '',
                                                )
                                            }
                                        />
                                    )}
                                />
                                <Form.Text className="text-danger">
                                    {errors.programa_oal_3?.message}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="formAñoPrograma3"
                            >
                                <Form.Label className="fs-4">
                                    Año Programa 3 (opcional)
                                </Form.Label>
                                <Form.Control
                                    type="number"
                                    as="input"
                                    {...register2('año_programa_oal_3')}
                                    min={1900}
                                    max={actualYear}
                                />
                                <Form.Text className="text-danger">
                                    {errors.año_programa_oal_3?.message}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formDispo">
                                <Form.Label className="fs-4">
                                    Disponibilidad
                                </Form.Label>
                                <Controller
                                    name="disponibilidad"
                                    control={control2}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            options={disponibilidadOptions}
                                            placeholder="Selecciona su disponibilidad"
                                            noOptionsMessage={() =>
                                                'No existe el dato introducido'
                                            }
                                            value={
                                                disponibilidadOptions.find(
                                                    (opt) =>
                                                        opt.value ===
                                                        field.value,
                                                ) || null
                                            }
                                            onChange={(option) =>
                                                field.onChange(
                                                    option ? option.value : '',
                                                )
                                            }
                                        />
                                    )}
                                />
                                <Form.Text className="text-danger">
                                    {errors.disponibilidad?.message}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formCarnet">
                                <Form.Label className="fs-4">Carnet</Form.Label>
                                <Controller
                                    name="carnet"
                                    control={control2}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            options={carnetOptions}
                                            placeholder="Selecciona el carnet que posea"
                                            noOptionsMessage={() =>
                                                'Se ha introducido un valor erróneo'
                                            }
                                            value={field.value || []}
                                            onChange={(selectedOptions) => {
                                                field.onChange(
                                                    selectedOptions || [],
                                                );
                                            }}
                                            isMulti
                                            required
                                        />
                                    )}
                                />
                                <Form.Text className="text-danger">
                                    {errors.carnet?.message}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="formVehiculo"
                            >
                                <Form.Label className="fs-4">
                                    Vehículo
                                </Form.Label>
                                <Controller
                                    name="vehiculo"
                                    control={control2}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            options={vehiculoOptions}
                                            placeholder="¿Cuenta con vehículo propio?"
                                            noOptionsMessage={() =>
                                                'Se ha introducido un valor erróneo'
                                            }
                                            value={vehiculoOptions.find(
                                                (opt) =>
                                                    opt.value === field.value,
                                            )}
                                            onChange={(option) =>
                                                field.onChange(
                                                    option ? option.value : '',
                                                )
                                            }
                                            required
                                        />
                                    )}
                                />
                                <Form.Text className="text-danger">
                                    {errors.vehiculo &&
                                        'Es necesario indicar si tiene vehículo propio o no.'}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="formLocalidad"
                            >
                                <Form.Label className="fs-4">
                                    Localidad
                                </Form.Label>
                                <Controller
                                    name="localidad"
                                    control={control2}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            options={localidadOptions}
                                            placeholder="Selecciona una localidad"
                                            noOptionsMessage={() =>
                                                'No se ha encontrado dicho municipio'
                                            }
                                            value={localidadOptions.find(
                                                (opt) =>
                                                    opt.value === field.value,
                                            )}
                                            onChange={(option) =>
                                                field.onChange(
                                                    option ? option.value : '',
                                                )
                                            }
                                            required
                                        />
                                    )}
                                />
                                <Form.Text className="text-danger">
                                    {errors.localidad?.message}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="formObservaciones"
                            >
                                <Form.Label className="fs-4">
                                    Observaciones (opcional)
                                </Form.Label>
                                <Form.Control
                                    {...register2('observaciones')}
                                    as="textarea"
                                    placeholder="Añada aquí sus observaciones"
                                    rows={3}
                                />
                            </Form.Group>
                            <Form.Group className="invisible">
                                <Form.Control
                                    {...register2('usuarioId')}
                                    type="text"
                                />
                            </Form.Group>
                        </div>
                    </div>

                    <div className="d-flex justify-content-center">
                        <Form.Group className="mb-3" controlId="form-Files">
                            <Form.Label className="fs-4">
                                Documentos (opcional)
                            </Form.Label>
                            <Form.Control
                                {...register2('documentos')}
                                type="file"
                                multiple={true}
                                accept="application/pdf"
                            />
                        </Form.Group>
                    </div>

                    <div className="d-flex justify-content-center row-wrap gap-2">
                        {documentos &&
                            documentos.map((documento) => (
                                <div
                                    className="d-flex flex-column flex-wrap"
                                    key={documento.id}
                                >
                                    <a
                                        href={`/storage/${documento.ruta_documento}`}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {documento.titulo_documento}
                                    </a>
                                    <Button
                                        variant="danger"
                                        size="sm"
                                        className="fw-bold"
                                        onClick={() =>
                                            confirm(
                                                '¿Estás seguro de que quieres eliminar este documento?',
                                            )
                                                ? handleEliminarDocumento(
                                                      documento.id,
                                                  )
                                                : null
                                        }
                                    >
                                        Eliminar
                                    </Button>
                                </div>
                            ))}
                    </div>

                    <div className="container my-3">
                        <div className="d-flex justify-content-center">
                            <Button variant="info" size="lg" type="submit">
                                Modificar usuario
                            </Button>
                        </div>
                    </div>
                </Form>
            </div>
            {contadorUsuarios > 0 ? (
                <div className="container-fluid my-5">
                    <h2 className="text-center">Listado de Usuarios</h2>
                    <h3 className="my-3 text-center">
                        Usuarios registrados: {contadorUsuarios}
                    </h3>
                    <Table striped bordered hover responsive>
                        <thead className="align-top">
                            <tr>
                                <th>#</th>
                                <th>Nombre</th>
                                <th>Apellidos</th>
                                <th>Sexo</th>
                                <th>Edad</th>
                                <th>Teléfono</th>
                                <th>DNI/NIE</th>
                                <th>Fecha de activación</th>
                                <th>Ocupación 1</th>
                                <th>Ocupación 2</th>
                                <th>Ocupación 3</th>
                                <th>Discapacidad</th>
                                <th>Nivel de estudios</th>
                                <th>Especialidades</th>
                                <th>Formación complementaria</th>
                                <th>Experiencia laboral</th>
                                <th>Programa</th>
                                <th>Año Programa</th>
                                <th>Programa 2</th>
                                <th>Año Programa 2</th>
                                <th>Programa 3</th>
                                <th>Año Programa 3</th>
                                <th>Disponibilidad</th>
                                <th>Carnet</th>
                                <th>Vehículo</th>
                                <th>Localidad</th>
                                <th>Observaciones</th>
                                <th>Añadido por</th>
                                <th>¿Eliminar?</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usuariosOAL.data.map((usuario) => (
                                <tr key={usuario.id} id={usuario.id}>
                                    <td onClick={modificarUsuario(usuario.id)}>
                                        {usuario.id}
                                    </td>
                                    <td onClick={modificarUsuario(usuario.id)}>
                                        {usuario.nombre}
                                    </td>
                                    <td onClick={modificarUsuario(usuario.id)}>
                                        {usuario.apellidos}
                                    </td>
                                    <td onClick={modificarUsuario(usuario.id)}>
                                        {usuario.sexo}
                                    </td>
                                    <td onClick={modificarUsuario(usuario.id)}>
                                        {convertirEdad(usuario.edad)}
                                    </td>
                                    <td onClick={modificarUsuario(usuario.id)}>
                                        {usuario.telefono}
                                    </td>
                                    <td onClick={modificarUsuario(usuario.id)}>
                                        {usuario.dni}
                                    </td>
                                    <td onClick={modificarUsuario(usuario.id)}>
                                        {usuario.fecha_activacion}
                                    </td>
                                    <td onClick={modificarUsuario(usuario.id)}>
                                        {usuario.ocupacion}
                                    </td>
                                    <td onClick={modificarUsuario(usuario.id)}>
                                        {usuario.ocupacion2}
                                    </td>
                                    <td onClick={modificarUsuario(usuario.id)}>
                                        {usuario.ocupacion3}
                                    </td>
                                    <td onClick={modificarUsuario(usuario.id)}>
                                        {usuario.discapacidad}
                                    </td>
                                    <td onClick={modificarUsuario(usuario.id)}>
                                        {usuario.nivel_estudios}
                                    </td>
                                    <td onClick={modificarUsuario(usuario.id)}>
                                        {JSON.parse(usuario.especialidad).map(
                                            (especialidad, index, array) => (
                                                <span key={especialidad}>
                                                    {array.length - 1 == index
                                                        ? especialidad
                                                        : especialidad + ','}
                                                    <br />
                                                </span>
                                            ),
                                        )}
                                    </td>
                                    <td onClick={modificarUsuario(usuario.id)}>
                                        {usuario.formacion_complementaria}
                                    </td>
                                    <td onClick={modificarUsuario(usuario.id)}>
                                        {usuario.experiencia_laboral}
                                    </td>
                                    <td onClick={modificarUsuario(usuario.id)}>
                                        {usuario.programa_oal}
                                    </td>
                                    <td onClick={modificarUsuario(usuario.id)}>
                                        {usuario.año_programa_oal}
                                    </td>
                                    <td onClick={modificarUsuario(usuario.id)}>
                                        {usuario.programa_oal_2}
                                    </td>
                                    <td onClick={modificarUsuario(usuario.id)}>
                                        {usuario.año_programa_oal_2}
                                    </td>
                                    <td onClick={modificarUsuario(usuario.id)}>
                                        {usuario.programa_oal_3}
                                    </td>
                                    <td onClick={modificarUsuario(usuario.id)}>
                                        {usuario.año_programa_oal_3}
                                    </td>
                                    <td onClick={modificarUsuario(usuario.id)}>
                                        {usuario.disponibilidad}
                                    </td>
                                    <td onClick={modificarUsuario(usuario.id)}>
                                        {JSON.parse(usuario.carnet).map(
                                            (carnet, index, array) => (
                                                <span key={carnet}>
                                                    {array.length - 1 == index
                                                        ? carnet
                                                        : carnet + ','}
                                                    <br />
                                                </span>
                                            ),
                                        )}
                                    </td>
                                    <td onClick={modificarUsuario(usuario.id)}>
                                        {usuario.vehiculo}
                                    </td>
                                    <td onClick={modificarUsuario(usuario.id)}>
                                        {usuario.localidad}
                                    </td>
                                    <td onClick={modificarUsuario(usuario.id)}>
                                        {usuario.observaciones}
                                    </td>
                                    <td onClick={modificarUsuario(usuario.id)}>
                                        {usuario.added_by_user}
                                    </td>
                                    <td className="text-center">
                                        <Form
                                            key={usuario.id + 'form'}
                                            onSubmit={(e) => {
                                                e.preventDefault();
                                                if (
                                                    confirm(
                                                        '¿Estás seguro de que quieres eliminar este usuario?',
                                                    )
                                                ) {
                                                    handleEliminarUsuario(
                                                        usuario.id,
                                                    );
                                                }
                                            }}
                                        >
                                            <Button
                                                variant="warning"
                                                size="sm"
                                                className="fw-bold"
                                                type="submit"
                                            >
                                                Eliminar
                                            </Button>
                                        </Form>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>

                    <div className="d-flex justify-content-center container">
                        <nav>
                            <ul className="pagination pagination-lg">
                                {usuariosOAL.links.map((link) => (
                                    <li
                                        key={link.url}
                                        className={`page-item ${link.active ? 'active' : ''}`}
                                    >
                                        <Link
                                            preserveScroll
                                            className="page-link"
                                            href={link.url}
                                            dangerouslySetInnerHTML={{
                                                __html: link.label,
                                            }}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            ) : (
                <div className="container-fluid my-5">
                    <h2 className="text-center">Listado de Usuarios</h2>
                    <h3 className="my-3 text-center">
                        No hay usuarios registrados
                    </h3>
                </div>
            )}
            {contadorUsuarios > 0 && (
                <Container className="d-flex justify-content-center mb-4">
                    <a href="/generatePdf" className="text-decoration-none">
                        <Button variant="info" size="lg">
                            Descargar PDF
                        </Button>
                    </a>
                </Container>
            )}
        </>
    );
}
