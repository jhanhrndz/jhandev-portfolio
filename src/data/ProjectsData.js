
import ecommerce from "../assets/imagen-ecommerce.jpg";
import transpormap from "../assets/transpormap-imagen.jpg";

export const projects = [
    {
      title: "TransporMap",
      description: "Java app that lets users report real-time road hazards and obstructions, reshaping urban mobility.",
      image: transpormap,
      tags: ["Java", "Oracle Database", "Social", "MapViewer", "Transport", "GPS", "Brower", "Invias.gov"],
      sourceCode: "https://github.com/jhanhrndz/transpormap",
    },
    {
      title: "Sistema de Gestión de Tareas",
      description: "Aplicación web para la gestión de tareas y proyectos, con características como autenticación de usuarios, asignación de tareas y seguimiento de progreso.",
      image: "/api/placeholder/600/400",
      tags: ["React", "Node.js", "MySQL"],
      sourceCode: "https://github.com/tuuser/task-manager",
    },
    {
      title: "TiendaYa: eCommerce in Barranquilla.",
      description: "E-commerce platform for Barranquilla shopkeepers to easily go digital.",
      image: ecommerce,
      tags: ["React", "Web Development", "MySQL", "Nodejs", "Claudinary", "eCommerce", "JavaScript", "Clever Cloud", "Cloud Storage"],
      sourceCode: "https://github.com/Nasor2/tiendaYa-project",
    },
    {
      title: "App de Notas",
      description: "Aplicación para tomar notas con categorización, búsqueda y sincronización en la nube.",
      image: "/api/placeholder/600/400",
      tags: ["React", "Firebase", "TypeScript"],
      sourceCode: "https://github.com/tuuser/notes-app",
      demo: "https://notes.tudominio.com",
    }
  ];