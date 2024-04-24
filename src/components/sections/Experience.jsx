import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import { ExperienceCard } from '../experience/ExperienceCard'

export const Experience = () => {

  const positions = [
    {
      position: 'Backend Software Developer',
      company: 'Cencosud',
      dates: '02/2023 - Actualidad',
      description: 'Trabajo junto al equipo de Payments brindando soporte y desarrollando nuevas funcionalidades para diversos productos internos, tales como pasarelas de pago, gestores de reembolso, control de contabilidad y demás. Utilizando principalmente NodeJS, Amazon Web Services y arquitectura de microservicios.'
    },
    {
      position: 'Salesforce Developer',
      company: 'Tata Consultancy Services',
      dates: '02/2022 - 02/2023',
      description: 'Desarrollé funcionalidades a medida en Salesforce para clientes externos de la compañía, así como también brindé soporte a productos existentes. Trabajé utilizando principalmente Apex y Lightning Web Components.'
    },
    {
      position: 'Operador IT',
      company: 'OSE (DCA)',
      dates: '12/2020 - 01/2022',
      description: 'Realizaba el monitoreo y ejecución de distintos procesos batch encargados de generar la facturación de los servicios de OSE para su posterior impresión'
    },
  ]

  return (
    <Box>
      <Heading size={'lg'} fontFamily={'Px-Grotesk'} mb={'1.5rem'}>🖥️ IT Experience</Heading>
      <Box>
        {
            positions.map((position, index) => <ExperienceCard key={index} experience={position} />)
        }
      </Box>
    </Box>
  )
}
