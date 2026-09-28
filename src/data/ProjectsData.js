import ecommerce from "../assets/projects-imagen/imagen-ecommerce.webp";
import transpormap from "../assets/projects-imagen/transpormap-imagen.webp";
import comparendo from "../assets/projects-imagen/Comparendo.webp";
import epp from "../assets/projects-imagen/epp.webp";
import sleepDisorders from "../assets/projects-imagen/sleep-disorders.webp";
import HeartDisease from "../assets/projects-imagen/Heart-Disease-Prediction.webp";
import ainexRobot from "../assets/projects-imagen/ainex-robot.png";
import touchlessProjection from "../assets/projects-imagen/touchless-projection-mapping.jpg";
import orionProject from "../assets/projects-imagen/orion-navigation.png";
import projectionMapper from "../assets/projects-imagen/projection-mapper.png";

export const projects = [
  {
      title: "Projection Mapper Studio: Real-Time Dual-Window Video Mapping Software",
    description: "Professional real-time projection mapping software with dual-window 0 ms latency synchronization via BroadcastChannel. Features Bézier curved polygons with De Casteljau subdivision, optical micro- calibration, occlusion masks, standalone .pmap project packaging with embedded media, and hybrid GPU hardware- accelerated video rendering (FFmpeg).",
    image: projectionMapper,
    tags: ["Projection Mapping", "JavaScript", "HTML5 Canvas", "Python", "FFmpeg", "GPU Acceleration", "Computer Graphics", "BroadcastChannel", "Audiovisual", "Live Show"],
    platforms: [
      { type: "github", url: "https://github.com/jhanhrndz/projection-mapper" },
      { type: "demo", url: "https://projection-mapper-demo.vercel.app/" },
    ],
  },
  {
    title: "ORION: Intelligent Obstacle Navigation & Real-Time Depth Vision",
    description: "Real-time edge AI navigation and obstacle avoidance system powered by monocular depth estimation (MiDaS) and wireless IoT computer vision. Features high-speed 30 FPS streaming on Seeed Studio XIAO ESP32S3 Sense, seamless hot-swap with fail-safe camera rollback, PyTorch Apple Silicon (MPS) acceleration, asynchronous multi-tone acoustic alerts, and a reactive FastAPI & WebSocket telemetry dashboard.",
    image: orionProject,
    tags: ["Computer Vision", "Python", "Deep Learning", "PyTorch", "MiDaS", "FastAPI", "WebSockets", "IoT", "ESP32-S3", "Edge AI"],
    platforms: [
      { type: "github", url: "https://github.com/AndresRuzTeran/OrionBelt" },
      { type: "live", url: "https://youtube.com/playlist?list=PLIUGWsZSXFCk&si=F7yvRY9QKDO7QCAe" } 
    ],
  },
  {
    title: "Touchless Projection Mapping: Vision AI & Gesture Control",
    description: "Interactive projection mapping system powered by computer vision (Google MediaPipe) and real-time background subtraction to project a digitalized holographic arm onto physical surfaces. Features dual-window architecture, mid-air pinch gesture actuation, zero-calibration spatial mapping, and WebSocket integration for smart hardware and IoT devices.",
    image: touchlessProjection,
    tags: ["Computer Vision", "Python", "MediaPipe", "JavaScript", "Projection Mapping", "WebSockets", "FastAPI", "Docker", "HCI", "IoT"],
    platforms: [
      { type: "github", url: "https://github.com/jhanhrndz/touchless-projection-mapping" },
    ],
  },
  {
    title: "AiNex: Autonomous Humanoid Voice & Vision AI",
    description: "Autonomous multimodal AI control system for the AiNex humanoid robot featuring wake-word voice interaction (Faster-Whisper), VLM visual navigation (Qwen2.5-VL on Ollama), ROS kinematics, and real-time facial surveillance (YuNet).",
    image: ainexRobot,
    tags: ["Robotics", "Python", "ROS", "Computer Vision", "NLP", "LLM", "Faster-Whisper", "Ollama", "OpenCV", "AI"],
    platforms: [
      { type: "github", url: "https://github.com/jhanhrndz/ainex-voice-ai" },
    ],
  },
  {
    title: "BuildSafe",
    description: "Smart Safety Management and Monitoring for Personal Protective Equipment (PPE) Compliance on Construction Sites",
    image: epp,
    tags: ["Data Analysis", "Python", "MySQL", "React", "Nodejs", "Computer Vision", "Cloudinary", "TypeScript", "Yolo11", "Cloud Storage"],
    platforms: [
      { type: "github", url: "https://github.com/jhanhrndz/buildsafe-frontend" },
      { type: "live", url: "https://www.youtube.com/watch?v=4gsLCIfnlEg" } 
    ],
  },
  {
    title: "Heart Disease Detection",
    description: "This project compares ML models (SVM, decision tree, logistic regression) using clinical data to predict heart disease.",
    image: HeartDisease,
    tags: ["Data Analysis", "Python", "Data Visualization", "Analysis", "Machine Learning", "AI"],
    platforms: [
      { type: "colab", url: "https://colab.research.google.com/drive/10fhckVmHBS6LtYug8ziTmXPmuUJ-_Lgw?usp=sharing" },
    ],
  },
  {
    title: "Sleep Health and Lifestyle Disorder Prediction",
    description: "This project uses clinical and lifestyle data to train machine learning models (logistic regression and MLP) to classify sleep disorders such as insomnia and sleep apnea.",
    image: sleepDisorders,
    tags: ["Data Analysis", "Python", "Data Visualization", "Analysis", "Machine Learning"],
    platforms: [
      { type: "colab", url: "https://colab.research.google.com/drive/1zGdksR7Xc8JzS-JN9kYZakviKL1J5k3N?usp=sharing" },
    ],
  },
  {
    title: "Traffic Fines Analysis in Barranquilla.",
    description: "Analysis of traffic fines in Barranquilla, uncovering trends and violations.",
    image: comparendo,
    tags: ["Data Analysis", "Python", "MySQL", "Analysis", "Data Visualization", "Machine Learning"],
    platforms: [
      { type: "kaggle", url: "https://www.kaggle.com/code/samuelpeaortega/comparendos-en-barranquilla-colombia" }
    ],
  },
  {
    title: "TiendaYa: eCommerce in Barranquilla.",
    description: "E-commerce platform for Barranquilla shopkeepers to easily go digital.",
    image: ecommerce,
    tags: ["React", "Web Development", "MySQL", "Nodejs", "Cloudinary", "eCommerce", "JavaScript", "Clever Cloud", "Cloud Storage"],
    platforms: [
      { type: "github", url: "https://github.com/jhanhrndz/tiendaYa-project" },
      { type: "live", url: "https://www.youtube.com/watch?v=r4Y944mHQAA" } 
    ],
  },
  {
    title: "TransporMap.",
    description: "Java app that lets users report real-time road hazards and obstructions, reshaping urban mobility.",
    image: transpormap,
    tags: ["Java", "Oracle Database", "Social", "MapViewer", "Transport", "GPS", "Browser", "Invias.gov"],
    platforms: [
      { type: "github", url: "https://github.com/jhanhrndz/transpormap" }
    ],
  }
];