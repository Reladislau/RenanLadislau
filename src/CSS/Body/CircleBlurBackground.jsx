export default function CircleBlurBackground() {
  return (
   <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '0px',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: `
          radial-gradient(
            circle,
            rgba(255,255,255,0.9) -10%,
            rgba(121,2,173,0.6) 35%,
            rgba(54,2,76,0.4) 70%,
            rgba(31,4,43,0.2) 100%
          )
        `,
        filter: 'blur(120px)',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}
