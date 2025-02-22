
import ecommerce from "../assets/projects-imagen/imagen-ecommerce.webp";
import transpormap from "../assets/projects-imagen/transpormap-imagen.webp";
import comparendo from "../assets/projects-imagen/Comparendo.png";

export const projects = [
  {
    title: "Traffic Fines Analysis in Barranquilla.",
    description: "Analysis of traffic fines in Barranquilla, uncovering trends and violations.",
    image: comparendo,
    tags: ["Data Analysis", "Python", "MySQL", "Analysis", "Data Visualization", "Marchine Learning"],
    sourceCode: "https://www.kaggle.com/code/samuelpeaortega/comparendos-en-barranquilla-colombia",
    platform: "kaggle",
  },
  {
    title: "TiendaYa: eCommerce in Barranquilla.",
    description: "E-commerce platform for Barranquilla shopkeepers to easily go digital.",
    image: ecommerce,
    tags: ["React", "Web Development", "MySQL", "Nodejs", "Claudinary", "eCommerce", "JavaScript", "Clever Cloud", "Cloud Storage"],
    sourceCode: "https://github.com/Nasor2/tiendaYa-project",
    platform: "github",
  },
  {
    title: "TransporMap.",
    description: "Java app that lets users report real-time road hazards and obstructions, reshaping urban mobility.",
    image: transpormap,
    tags: ["Java", "Oracle Database", "Social", "MapViewer", "Transport", "GPS", "Brower", "Invias.gov"],
    sourceCode: "https://github.com/jhanhrndz/transpormap",
    platform: "github",
  }
];