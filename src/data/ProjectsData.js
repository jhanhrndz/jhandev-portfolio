import ecommerce from "../assets/projects-imagen/imagen-ecommerce.webp";
import transpormap from "../assets/projects-imagen/transpormap-imagen.webp";
import comparendo from "../assets/projects-imagen/Comparendo.png";
import epp from "../assets/projects-imagen/epp.jpg";

export const projects = [
  {
    title: "BuildSafe",
    description: "Smart Safety Management and Monitoring for Personal Protective Equipment (PPE) Compliance on Construction Sites",
    image: epp,
    tags: ["Data Analysis", "Python", "MySQL", "React", "Nodejs", "Computer Vision", "Claudinary", "TypeScript", "Yolo11", "Cloud Storage"],
    platforms: [
      { type: "github", url: "https://github.com/jhanhrndz/buildsafe-frontend" },
      { type: "live", url: "https://www.youtube.com/watch?v=4gsLCIfnlEg" } 
    ],
  },
  {
    title: "Traffic Fines Analysis in Barranquilla.",
    description: "Analysis of traffic fines in Barranquilla, uncovering trends and violations.",
    image: comparendo,
    tags: ["Data Analysis", "Python", "MySQL", "Analysis", "Data Visualization", "Marchine Learning"],
    platforms: [
      { type: "kaggle", url: "https://www.kaggle.com/code/samuelpeaortega/comparendos-en-barranquilla-colombia" }
    ],
  },
  {
    title: "TiendaYa: eCommerce in Barranquilla.",
    description: "E-commerce platform for Barranquilla shopkeepers to easily go digital.",
    image: ecommerce,
    tags: ["React", "Web Development", "MySQL", "Nodejs", "Claudinary", "eCommerce", "JavaScript", "Clever Cloud", "Cloud Storage"],
    platforms: [
      { type: "github", url: "https://github.com/jhanhrndz/tiendaYa-project" },
      { type: "live", url: "https://www.youtube.com/watch?v=r4Y944mHQAA" } 
    ],
  },
  {
    title: "TransporMap.",
    description: "Java app that lets users report real-time road hazards and obstructions, reshaping urban mobility.",
    image: transpormap,
    tags: ["Java", "Oracle Database", "Social", "MapViewer", "Transport", "GPS", "Brower", "Invias.gov"],
    platforms: [
      { type: "github", url: "https://github.com/jhanhrndz/transpormap" }
    ],
  }
];