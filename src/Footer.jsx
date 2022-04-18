
import S4Data from "./S4Data";
import Cities from "./Cities";
function Footer() {
  return (
    <>
      <div id="citysec">
        {S4Data[3].map((item, key) => {
          return <Cities img={item.img} h={item.h} d={item.d} />;
        })}
      </div>
    
    </>
  );
}

export default Footer;
