export default function Footer() {
  return (
    <div className="bg-slate-100 p-5 md:pl-[10%] text-center md:text-left">
      <div className="grid grid-cols-2 md:grid-cols-4 max-w-7xl gap-y-10 mx-auto px-8 md:px-16 ">
        <div className="space-y-2 text-xs text-slate-800 ">
          <h5 className="font-bold">ABOUT</h5>
          <p>How Airbnb works</p>
          <p>Newsroom</p>
          <p>Investors</p>
          <p>Airbnb Plus</p>
          <p>Airbnb Luxe</p>
        </div>
        <div className="space-y-2 text-xs text-slate-800">
          <h5 className="font-bold">COMMUNITY</h5>
          <p>Accessibility</p>
          <p>This is not a real site</p>
          <p>Its a pretty awesome</p>
          <p>Refferrals accepted</p>
          <p>built with Next.js </p>
        </div>
        <div className="space-y-2 text-xs text-slate-800">
          <h5 className="font-bold">HOST</h5>
          <p>David Daly</p>
          <p>Presents</p>
          <p>Airbnb full stack</p>
          <p>Join Now</p>
          <p>Win big</p>
        </div>
        <div className="space-y-2 text-xs text-slate-800">
          <h5 className="font-bold">SUPPORT</h5>
          <p>Help Center</p>
          <p>Easter Egg</p>
          <p>Investors</p>
          <p>Trust & Safety</p>
          <p>Newsroom</p>
        </div>
      </div>
    </div>
  );
}
