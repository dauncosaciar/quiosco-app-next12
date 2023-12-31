import Image from "next/image";

const Categoria = ({ categoria }) => {
  const { id, nombre, icono } = categoria;

  return (
    <div className="flex items-center gap-4 w-full border p-5 hover:bg-amber-400">
      <Image width={70} height={70} src={`/assets/img/icono_${icono}.svg`} alt="Imagen icono" />

      <button type="button" className="text-2xl font-bold hover:cursor-pointer">
        {nombre}
      </button>
    </div>
  );
};

export default Categoria;
