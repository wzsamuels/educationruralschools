export default function Footer () {
  return (
    <footer className={'absolute bottom-0 bg-gray-900 text-gray-300 h-auto p-4 w-full flex justify-center items-center'}>
    <div className={'font-bold'}>
      <a className={'underline hover:text-highlight'} href={'mailto:martinstellallc@gmail.com'}>
        dummy@gmail.com
      </a>
      <span className="text-primary"> | </span>
      <a className={'underline hover:text-highlight'} href={'tel:5556350595'}>555-635-0595</a>
      <span className="text-primary"> | </span>
      <span>Copyright KERRS</span>
      <span className="text-primary"> | </span>
      <span>Web Site by </span>
      <a className={'underline hover:text-highlight'} href={'https://twinsilverdesign.com'}>Twin Silver Design</a>
    </div>
  </footer>
  )
}