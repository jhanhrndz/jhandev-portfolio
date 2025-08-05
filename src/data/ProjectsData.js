import ecommerce from "../assets/projects-imagen/imagen-ecommerce.webp";
import transpormap from "../assets/projects-imagen/transpormap-imagen.webp";
import comparendo from "../assets/projects-imagen/Comparendo.png";
import epp from "../assets/projects-imagen/epp.jpg";
import sleepDisorders from "../assets/projects-imagen/sleep-disorders.jpg";
import HeartDisease from "../assets/projects-imagen/Heart-Disease-Prediction.webp";

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
    title: "Heart Disease Detection",
    description: "This project compares ML models (SVM, decision tree, logistic regression) using clinical data to predict heart disease.",
    image: HeartDisease,
    tags: ["Data Analysis", "Python", "Data Visualization", "Analysis", "Marchine Learning", "IA"],
    platforms: [
      { type: "colab", url: "https://colab.research.google.com/drive/10fhckVmHBS6LtYug8ziTmXPmuUJ-_Lgw?usp=sharing" },
    ],
  },
  {
    title: "Sleep Health and Lifestyle Disorder Prediction",
    description: "This project uses clinical and lifestyle data to train machine learning models (logistic regression and MLP) to classify sleep disorders such as insomnia and sleep apnea.",
    image: sleepDisorders,
    tags: ["Data Analysis", "Python", "Data Visualization", "Analysis", "Marchine Learning"],
    platforms: [
      { type: "colab", url: "https://colab.research.google.com/drive/1zGdksR7Xc8JzS-JN9kYZakviKL1J5k3N?usp=sharing" },
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