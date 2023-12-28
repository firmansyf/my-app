/* eslint-disable react/prop-types */
export default function Ping(props) {
  return (
    <div className='flex relative items-center'>
      <span className='relative flex h-3 w-3 justify-center rounded-full items-center'>
        <span
          className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${props?.Bgcolor}`}
        ></span>
        <span className={`relative inline-flex rounded-full h-2 w-2 ${props?.Bgcolor}`}></span>
      </span>
      {props.children}
    </div>
  )
}
