import React from 'react'

const RadiaGradientBackground = ({ variant = 'hero' }) => {
  const gradientOrbs = [
    {
      className: 'gradient-orb-1',
      colors: [
        { color: 'rgba(141, 255, 105, 0.25)', stop: '30%' },
        { color: 'rgba(73, 192, 240, 0.2)', stop: '30%' },
        { color: 'rgba(93, 119, 224, 0.15)', stop: '60%' },
        { color: 'rgba(0, 0, 0, 0)', stop: '100%' },
      ],
    },
    {
      className: 'gradient-orb-2',
      colors: [
        { color: 'rgba(209, 206, 11, 0.2)', stop: '0%' },
        { color: 'rgba(141, 255, 105, 0.15)', stop: '40%' },
        { color: 'rgba(73, 192, 240, 0.12)', stop: '70%' },
        { color: 'rgba(0, 0, 0, 0)', stop: '100%' },
      ],
    },
    {
      className: 'gradient-orb-3',
      colors: [
        { color: 'rgba(73, 192, 240, 0.2)', stop: '0%' },
        { color: 'rgba(93, 119, 224, 0.5)', stop: '35%' },
        { color: 'rgba(141, 255, 105, 0.2)', stop: '65%' },
        { color: 'rgba(0, 0, 0, 0)', stop: '100%' },
      ],
    },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {gradientOrbs.map((orb, index) => {
        const gradientStyle = {
          background: `radial-gradient(circle, ${orb.colors
            .map((c) => `${c.color} ${c.stop}`)
            .join(', ')})`,
          filter: 'blur(0px)',
        };

        return (
          <div
            key={index}
            className={orb.className}
            style={gradientStyle}
          />
        );
      })}
    </div>
  )
}

export default RadiaGradientBackground
