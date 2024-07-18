export const Card = ({ nombre, imagen, mensaje, fecha }) => {

    mensaje = mensaje.slice(0, 15) + "..."
    
  return (
    <article className="bg-slate-800 w-[250px] h-14 flex items-center justify-between px-2 py-1 rounded-lg mt-1">
      <section className="bg-red-700 h-10 w-10 rounded-full overflow-hidden">
        <img className="w-full h-full" src={imagen} alt={""} />
      </section>
      <section className="w-[80%] h-full flex items-center justify-between text-white">
        <div>
            <h4 className="text-[14px]">{nombre}</h4>
            <p className="text-[11px]">
                {
                    mensaje === "" ? "Sin mensaje" : mensaje
                }
            </p>
        </div>
        <div className="flex items-start h-full">
            <p className="text-[10px] mt-2">{fecha}</p>
        </div>
      </section>
    </article>
  );
};
