
// import React from "react";
// import {
//   View,
//   Text,
//   ScrollView,
//   StyleSheet,
//   TouchableOpacity,
//   Image,
//   Dimensions,
// } from "react-native";
// import * as Animatable from "react-native-animatable";

// const screenHeight = Dimensions.get("window").height;

// export default function App() {
//   const scrollRef = React.useRef(null);

//   const scrollToSection = (yOffset) => {
//     scrollRef.current?.scrollTo({ y: yOffset, animated: true });
//   };

//   return (
//     <View style={styles.container}>
//       {/* ===== Top Menu ===== */}
//       <View style={styles.topMenu}>
//         {["Home", "About", "Skills", "Projects", "Contact"].map(
//           (section, index) => (
//             <TouchableOpacity
//               key={index}
//               onPress={() => scrollToSection(index * screenHeight)}
//             >
//               <Text style={styles.menuText}>{section}</Text>
//             </TouchableOpacity>
//           )
//         )}
//       </View>

//       {/* ===== Main Scroll View ===== */}
//       <ScrollView ref={scrollRef} pagingEnabled showsVerticalScrollIndicator={false}>
//         {/* ===== Home Section ===== */}
//         <View style={[styles.section, styles.homeSection]}>
//           <Animatable.View animation="fadeInDown" duration={1200}>
//             <Text style={styles.hello}>Hello, It's Me</Text>
//             <Text style={styles.name}>Bhoomika</Text>
//             <Text style={styles.role}>
//               And I'm a <Text style={styles.roleHighlight}>React Native Developer</Text>
//             </Text>
//             <Text style={styles.desc}>
//               I build modern mobile and web apps using React Native, Django, and
//               modern technologies.
//             </Text>
//           </Animatable.View>

//            <Animatable.Image animation="zoomIn"
//             duration={1500}
//    source={require('./images/bhoomi.jpg')}
//    style={styles.profilePic}
//  />
//          </View>

//         {/* ===== About Section ===== */}
//         <View style={[styles.section, styles.aboutSection]}>
//           <Animatable.Text animation="fadeInUp" style={styles.sectionTitle}>
//             About <Text style={styles.highlight}>Me</Text>
//           </Animatable.Text>
//           <Text style={styles.aboutText}>
//             I’m a passionate developer with experience in building interactive
//             and user-friendly applications. I enjoy turning creative ideas into
//             functional digital experiences.
//           </Text>
//         </View>

//         {/* ===== Skills Section ===== */}
//         <View style={[styles.section, styles.skillsSection]}>
//           <Animatable.Text animation="fadeInUp" style={styles.sectionTitle}>
//             My <Text style={styles.highlight}>Skills</Text>
//           </Animatable.Text>

//           {[
//             { name: "HTML", percent: 90 },
//             { name: "CSS", percent: 85 },
//             { name: "JavaScript", percent: 80 },
//             { name: "React", percent: 85 },
//             { name: "UI/UX", percent: 75 },
//           ].map((skill, i) => (
//             <Animatable.View
//               key={i}
//               animation="fadeInLeft"
//               delay={i * 200}
//               style={styles.skillBox}
//             >
//               <Text style={styles.skillName}>{skill.name}</Text>
//               <View style={styles.progressBar}>
//                 <View style={[styles.progressFill, { width: `${skill.percent}%` }]} />
//               </View>
//             </Animatable.View>
//           ))}
//         </View>

//         {/* ===== Projects Section ===== */}
//         <View style={[styles.section, styles.projectsSection]}>
//           <Animatable.Text animation="fadeInUp" style={styles.sectionTitle}>
//             Recent <Text style={styles.highlight}>Projects</Text>
//           </Animatable.Text>

//           {["E-Commerce App", "Snake Game", "Ghibli Image Converter"].map(
//             (project, i) => (
//               <Animatable.View
//                 key={i}
//                 animation="fadeInUp"
//                 delay={i * 250}
//                 style={styles.projectCard}
//               >
//                 <Text style={styles.projectTitle}>{project}</Text>
//               </Animatable.View>
//             )
//           )}
//         </View>

//         {/* ===== Contact Section ===== */}
//         <View style={[styles.section, styles.contactSection]}>
//           <Animatable.Text animation="fadeInUp" style={styles.sectionTitle}>
//             Contact <Text style={styles.highlight}>Me</Text>
//           </Animatable.Text>
//           <Text style={styles.contactText}>
//             Let’s collaborate or discuss your next project!
//           </Text>
//           <TouchableOpacity style={styles.btn}>
//             <Text style={styles.btnText}>Say Hello</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#0a0a0a",
//   },

//   topMenu: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     paddingVertical: 15,
//     backgroundColor: "#111",
//   },
//   menuText: {
//     color: "#00ffee",
//     fontSize: 16,
//     fontWeight: "600",
//   },

//   section: {
//     height: screenHeight,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//   },

//   homeSection: {
//     flexDirection: "column",
//   },
//   hello: {
//     fontSize: 20,
//     color: "#ccc",
//   },
//   name: {
//     fontSize: 36,
//     fontWeight: "700",
//     color: "#00ffee",
//     marginVertical: 5,
//   },
//   role: {
//     fontSize: 18,
//     color: "#fff",
//   },
//   roleHighlight: {
//     color: "#ff00ff",
//     fontWeight: "700",
//   },
//   desc: {
//     color: "#aaa",
//     textAlign: "center",
//     marginTop: 10,
//     paddingHorizontal: 20,
//   },
//   profilePic: {
//     width: 180,
//     height: 180,
//     borderRadius: 100,
//     marginTop: 25,
//     borderWidth: 3,
//     borderColor: "#00ffee",
//     shadowColor: "#00ffee",
//     shadowOpacity: 0.9,
//     shadowRadius: 20,
//   },

//   aboutSection: {},
//   sectionTitle: {
//     fontSize: 28,
//     fontWeight: "700",
//     color: "#fff",
//     marginBottom: 20,
//   },
//   highlight: {
//     color: "#00ffee",
//   },
//   aboutText: {
//     color: "#bbb",
//     textAlign: "center",
//     fontSize: 16,
//     lineHeight: 24,
//   },

//   skillsSection: {},
//   skillBox: {
//     width: "80%",
//     marginVertical: 8,
//   },
//   skillName: {
//     color: "#fff",
//     fontWeight: "600",
//   },
//   progressBar: {
//     height: 8,
//     backgroundColor: "#333",
//     borderRadius: 5,
//     marginTop: 5,
//   },
//   progressFill: {
//     height: "100%",
//     backgroundColor: "#00ffee",
//     borderRadius: 5,
//   },

//   projectsSection: {},
//   projectCard: {
//     width: "80%",
//     backgroundColor: "#111",
//     padding: 20,
//     marginVertical: 10,
//     borderRadius: 12,
//     shadowColor: "#00ffee",
//     shadowOpacity: 0.5,
//     shadowRadius: 10,
//   },
//   projectTitle: {
//     color: "#00ffee",
//     fontSize: 18,
//     fontWeight: "600",
//     textAlign: "center",
//   },

//   contactSection: {},
//   contactText: {
//     color: "#ccc",
//     textAlign: "center",
//     fontSize: 16,
//     marginVertical: 15,
//   },
//   btn: {
//     backgroundColor: "#00ffee",
//     borderRadius: 30,
//     paddingVertical: 12,
//     paddingHorizontal: 40,
//   },
//   btnText: {
//     color: "#111",
//     fontWeight: "700",
//     fontSize: 16,
//   },
// });
// import React from "react";
// import {
//   View,
//   Text,
//   ScrollView,
//   StyleSheet,
//   TouchableOpacity,
//   Image,
//   Dimensions,
// } from "react-native";
// import * as Animatable from "react-native-animatable";
// import Svg, { Circle } from "react-native-svg";

// const screenHeight = Dimensions.get("window").height;

// // ✅ Custom Circular Skill Component
// const SkillCircle = ({ name, percentage, delay }) => {
//   const radius = 45;
//   const strokeWidth = 8;
//   const circumference = 2 * Math.PI * radius;
//   const progress = (percentage / 100) * circumference;

//   return (
//     <Animatable.View
//       animation="zoomIn"
//       delay={delay}
//       style={styles.skillCircleContainer}
//     >
//       <Svg height="110" width="110" style={{ transform: [{ rotate: "-90deg" }] }}>
//         {/* Background Circle */}
//         <Circle
//           cx="55"
//           cy="55"
//           r={radius}
//           stroke="#222"
//           strokeWidth={strokeWidth}
//           fill="none"
//         />
//         {/* Progress Circle */}
//         <Circle
//           cx="55"
//           cy="55"
//           r={radius}
//           stroke="#00ffee"
//           strokeWidth={strokeWidth}
//           strokeDasharray={circumference}
//           strokeDashoffset={circumference - progress}
//           strokeLinecap="round"
//           fill="none"
//         />
//       </Svg>
//       {/* Percentage Text */}
//       <View style={styles.skillTextContainer}>
//         <Text style={styles.skillPercent}>{percentage}%</Text>
//         <Text style={styles.skillLabel}>{name}</Text>
//       </View>
//     </Animatable.View>
//   );
// };

// export default function App() {
//   const scrollRef = React.useRef(null);
//   const scrollToSection = (yOffset) => {
//     scrollRef.current?.scrollTo({ y: yOffset, animated: true });
//   };

//   return (
//     <View style={styles.container}>
//       {/* ===== Top Menu ===== */}
//       <View style={styles.topMenu}>
//         {["Home", "About", "Skills", "Projects", "Contact"].map(
//           (section, index) => (
//             <TouchableOpacity
//               key={index}
//               onPress={() => scrollToSection(index * screenHeight)}
//             >
//               <Text style={styles.menuText}>{section}</Text>
//             </TouchableOpacity>
//           )
//         )}
//       </View>

//       {/* ===== Scroll View ===== */}
//       <ScrollView ref={scrollRef} pagingEnabled showsVerticalScrollIndicator={false}>
//         {/* ===== Home Section ===== */}
//         <View style={[styles.section, styles.homeSection]}>
//           <Animatable.View animation="fadeInDown" duration={1200}>
//             <Text style={styles.hello}>Hello, It's Me</Text>
//             <Text style={styles.name}>Bhoomika</Text>
//             <Text style={styles.role}>
//               And I'm a <Text style={styles.roleHighlight}>React Native Developer</Text>
//             </Text>
//             <Text style={styles.desc}>
//               I build modern mobile and web apps using React Native, Django, and
//               other technologies.
//             </Text>
//           </Animatable.View>

//               <Animatable.Image animation="zoomIn"
//             duration={1500}
//    source={require('./images/bhoomi.jpg')}
//    style={styles.profilePic}
//   />
//         </View>

//         {/* ===== About Section ===== */}
//         <View style={[styles.section, styles.aboutSection]}>
//           <Animatable.Text animation="fadeInUp" style={styles.sectionTitle}>
//             About <Text style={styles.highlight}>Me</Text>
//           </Animatable.Text>
//           <Text style={styles.aboutText}>
//             I’m a passionate developer with 1 year of experience in building
//             interactive and user-friendly applications using React Native,
//             Django, and modern front-end frameworks.
//           </Text>
//         </View>

//         {/* ===== Skills Section (Circular Progress) ===== */}
//         <View style={[styles.section, styles.skillsSection]}>
//           <Animatable.Text animation="fadeInUp" style={styles.sectionTitle}>
//             My <Text style={styles.highlight}>Skills</Text>
//           </Animatable.Text>

//           <View style={styles.skillsRow}>
//             <SkillCircle name="HTML" percentage={90} delay={100} />
//             <SkillCircle name="CSS" percentage={85} delay={200} />
//             <SkillCircle name="JavaScript" percentage={80} delay={300} />
//           </View>

//           <View style={styles.skillsRow}>
//             <SkillCircle name="React" percentage={85} delay={400} />
//             <SkillCircle name="Django" percentage={75} delay={500} />
//             <SkillCircle name="UI/UX" percentage={70} delay={600} />
//           </View>
//         </View>

//         {/* ===== Projects Section ===== */}
//         <View style={[styles.section, styles.projectsSection]}>
//           <Animatable.Text animation="fadeInUp" style={styles.sectionTitle}>
//             Recent <Text style={styles.highlight}>Projects</Text>
//           </Animatable.Text>

//           {["Fashion Website", "Snake Game", "Ghibli Image Converter"].map(
//             (project, i) => (
//               <Animatable.View
//                 key={i}
//                 animation="fadeInUp"
//                 delay={i * 250}
//                 style={styles.projectCard}
//               >
//                 <Text style={styles.projectTitle}>{project}</Text>
//               </Animatable.View>
//             )
//           )}
//         </View>

//         {/* ===== Contact Section ===== */}
//         <View style={[styles.section, styles.contactSection]}>
//           <Animatable.Text animation="fadeInUp" style={styles.sectionTitle}>
//             Contact <Text style={styles.highlight}>Me</Text>
//           </Animatable.Text>
//           <Text style={styles.contactText}>
//             Let’s collaborate or discuss your next project!
//           </Text>
//           <TouchableOpacity style={styles.btn}>
//             <Text style={styles.btnText}>Say Hello</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "#0a0a0a" },

//   topMenu: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     paddingVertical: 15,
//     backgroundColor: "#111",
//   },
//   menuText: {
//     color: "#00ffee",
//     fontSize: 16,
//     fontWeight: "600",
//   },

//   section: {
//     height: screenHeight,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//   },

//   // Home Section
//   homeSection: { flexDirection: "row" },
//   hello: { fontSize: 20, color: "#ccc" },
//   name: {
//     fontSize: 36,
//     fontWeight: "700",
//     color: "#00ffee",
//     marginVertical: 5,
//   },
//   role: { fontSize: 18, color: "#fff" },
//   roleHighlight: { color: "#ff00ff", fontWeight: "700" },
//   desc: { color: "#aaa", textAlign: "center", marginTop: 10, paddingHorizontal: 20 },
//   profilePic: {
//     width: 180,
//     height: 180,
//     borderRadius: 100,
//     marginTop: 25,
//     borderWidth: 3,
//     borderColor: "#00ffee",
//   },

//   // About Section
//   sectionTitle: {
//     fontSize: 28,
//     fontWeight: "700",
//     color: "#fff",
//     marginBottom: 20,
//   },
//   highlight: { color: "#00ffee" },
//   aboutText: {
//     color: "#bbb",
//     textAlign: "center",
//     fontSize: 16,
//     lineHeight: 24,
//     paddingHorizontal: 20,
//   },

//   // Skills Section
//   skillsSection: {},
//   skillsRow: {
//     flexDirection: "row",
//     justifyContent: "space-evenly",
//     flexWrap: "wrap",
//     width: "100%",
//   },
//   skillCircleContainer: {
//     alignItems: "center",
//     justifyContent: "center",
//     margin: 15,
//   },
//   skillTextContainer: {
//     position: "absolute",
//     alignItems: "center",
//   },
//   skillPercent: {
//     color: "#00ffee",
//     fontSize: 16,
//     fontWeight: "700",
//   },
//   skillLabel: {
//     color: "#fff",
//     fontSize: 13,
//     marginTop: 3,
//   },

//   // Projects
//   projectCard: {
//     width: "80%",
//     backgroundColor: "#111",
//     padding: 20,
//     marginVertical: 10,
//     borderRadius: 12,
//   },
//   projectTitle: {
//     color: "#00ffee",
//     fontSize: 18,
//     fontWeight: "600",
//     textAlign: "center",
//   },

//   // Contact
//   contactText: {
//     color: "#ccc",
//     textAlign: "center",
//     fontSize: 16,
//     marginVertical: 15,
//   },
//   btn: {
//     backgroundColor: "#00ffee",
//     borderRadius: 30,
//     paddingVertical: 12,
//     paddingHorizontal: 40,
//   },
//   btnText: {
//     color: "#111",
//     fontWeight: "700",
//     fontSize: 16,
//   },
// });
import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import * as Animatable from "react-native-animatable";
import Svg, { Circle } from "react-native-svg";

const screenHeight = Dimensions.get("window").height;

// ✅ Skill Circle Component
const SkillCircle = ({ name, percentage, delay }) => {
  const radius = 45;
  const strokeWidth = 8;
  const circumference = 2 * Math.PI * radius;
  const progress = (percentage / 100) * circumference;

  return (
    <Animatable.View
      animation="zoomIn"
      delay={delay}
      style={styles.skillCircleContainer}
    >
      <Svg height="110" width="110" style={{ transform: [{ rotate: "-90deg" }] }}>
        <Circle
          cx="55"
          cy="55"
          r={radius}
          stroke="#222"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <Circle
          cx="55"
          cy="55"
          r={radius}
          stroke="#00ffee"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          strokeLinecap="round"
          fill="none"
        />
      </Svg>
      <View style={styles.skillTextContainer}>
        <Text style={styles.skillPercent}>{percentage}%</Text>
        <Text style={styles.skillLabel}>{name}</Text>
      </View>
    </Animatable.View>
  );
};

export default function App() {
  const scrollRef = React.useRef(null);
  const scrollToSection = (yOffset) => {
    scrollRef.current?.scrollTo({ y: yOffset, animated: true });
  };

  return (
    <View style={styles.container}>
      {/* ===== Top Menu ===== */}
      <View style={styles.topMenu}>
        {["Home", "About", "Skills", "Experience", "Projects", "Education", "Contact"].map(
          (section, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => scrollToSection(index * screenHeight)}
            >
              <Text style={styles.menuText}>{section}</Text>
            </TouchableOpacity>
          )
        )}
      </View>

      {/* ===== Scrollable Sections ===== */}
      <ScrollView ref={scrollRef} pagingEnabled showsVerticalScrollIndicator={false}>
        {/* ===== HOME ===== */}
        <View style={[styles.section, styles.homeSection]}>
          <Animatable.View animation="fadeInDown" duration={1200}>
            <Text style={styles.hello}>Hello, I'm</Text>
            <Text style={styles.name}>Bhoomika N</Text>
            <Text style={styles.role}>
              <Text style={styles.roleHighlight}>Software Developer</Text>
            </Text>
            <Text style={styles.desc}>
              Self-driven software developer with 1 year of experience building
              and deploying web applications using Django, Python, and React.
            </Text>
          </Animatable.View>
           <Animatable.Image animation="zoomIn"
             duration={1500}
    source={require('./images/bhoomi.jpg')}
    style={styles.profilePic}
  />
          
        </View>

        {/* ===== ABOUT ===== */}
        <View style={[styles.section, styles.aboutSection]}>
          <Animatable.Text animation="fadeInUp" style={styles.sectionTitle}>
            About <Text style={styles.highlight}>Me</Text>
          </Animatable.Text>
          <Text style={styles.aboutText}>
            Self-driven developer skilled in backend development, error handling,
            version control, and deployment. Actively gaining exposure to DevOps tools like GitHub Actions
            and AWS (basics). Eager to contribute to cloud and DevOps teams with a strong foundation in Python-based development.
          </Text>
        </View>

  {/* ===== SKILLS ===== */}
{/* ===== SKILLS ===== */}
<View style={[styles.section, styles.skillsSection]}>
  <Animatable.Text animation="fadeInUp" style={styles.sectionTitle}>
    My <Text style={styles.highlight}>Skills</Text>
  </Animatable.Text>

  {/* Programming Languages */}
  <Text style={styles.skillCategory}>Programming Languages</Text>
  <View style={styles.skillsRow}>
    <SkillCircle name="Python" percentage={90} delay={100} />
    <SkillCircle name="Java" percentage={80} delay={200} />
    <SkillCircle name="C++" percentage={75} delay={300} />
    <SkillCircle name="Dart" percentage={70} delay={400} />
  </View>

  {/* Web Technologies */}
  <Text style={styles.skillCategory}>Web Technologies</Text>
  <View style={styles.skillsRow}>
    <SkillCircle name="HTML/CSS/JS" percentage={90} delay={500} />
    <SkillCircle name="jQuery" percentage={80} delay={600} />
    <SkillCircle name="React" percentage={85} delay={700} />
    <SkillCircle name="React Native" percentage={75} delay={800} />
    <SkillCircle name="Django" percentage={85} delay={900} />
  </View>

  {/* Databases & Version Control */}
  <Text style={styles.skillCategory}>Databases & Version Control</Text>
  <View style={styles.skillsRow}>
    <SkillCircle name="MySQL" percentage={80} delay={1000} />
    <SkillCircle name="SQLite" percentage={75} delay={1100} />
    <SkillCircle name="GitHub" percentage={85} delay={1200} />
  </View>

  {/* Tools, Others & Libraries */}
  <Text style={styles.skillCategory}>Tools, Others & Libraries</Text>
  <View style={styles.skillsRow}>
    <SkillCircle name="Django Framework" percentage={85} delay={1300} />
    <SkillCircle name="DSA" percentage={80} delay={1400} />
    <SkillCircle name="AWS (Basics)" percentage={70} delay={1500} />
    <SkillCircle name="NumPy" percentage={85} delay={1600} />
    <SkillCircle name="Pandas" percentage={85} delay={1700} />
    <SkillCircle name="Scikit-learn" percentage={80} delay={1800} />
    <SkillCircle name="Matplotlib" percentage={75} delay={1900} />
  </View>
</View>



        {/* ===== EXPERIENCE ===== */}
        <View style={[styles.section, styles.expSection]}>
          <Animatable.Text animation="fadeInUp" style={styles.sectionTitle}>
            Professional <Text style={styles.highlight}>Experience</Text>
          </Animatable.Text>
          <View style={styles.expCard}>
            <Text style={styles.expRole}>Software Developer</Text>
            <Text style={styles.expCompany}>PROGEN ERP, Manipal</Text>
            <Text style={styles.expPeriod}>April 2024 - Present</Text>
            <Text style={styles.expDesc}>
              • Built and maintained core ERP modules: HR, Inventory, Sales, and Finance.{"\n"}
              • Created backend validation systems ensuring data integrity.{"\n"}
              • Integrated financial logic, optimized performance, and handled deployment and testing.{"\n"}
              • Collaborated with QA teams and deployed multiple Django-based projects.
            </Text>
          </View>
        </View>

        {/* ===== PROJECTS ===== */}
        <View style={[styles.section, styles.projectsSection]}>
          <Animatable.Text animation="fadeInUp" style={styles.sectionTitle}>
            My <Text style={styles.highlight}>Projects</Text>
          </Animatable.Text>
          {[
            "FashionFrenzy – Django-based E-commerce store with category-wise filtering and PayPal integration.",
            "ERP Validation – Real-time validation for invoices and orders.",
            "Web-Scraped Translation Tool – Automated translation from foreign sites using scraping & ML.",
            "Smart Campus – Django app for fee payments, library, and SMS-based notifications.",
          ].map((project, i) => (
            <Animatable.View
              key={i}
              animation="fadeInUp"
              delay={i * 250}
              style={styles.projectCard}
            >
              <Text style={styles.projectText}>{project}</Text>
            </Animatable.View>
          ))}
        </View>

        {/* ===== EDUCATION ===== */}
        <View style={[styles.section, styles.educationSection]}>
          <Animatable.Text animation="fadeInUp" style={styles.sectionTitle}>
            My <Text style={styles.highlight}>Education</Text>
          </Animatable.Text>
          <Text style={styles.eduText}>
            🎓 <Text style={styles.eduBold}>Bachelor of Computer Applications (BCA)</Text>{"\n"}
            Dr. B.B. Hegde First Grade College, Kundapura (2020–2023) | 91%
          </Text>
          <Text style={styles.eduText}>
            🧮 <Text style={styles.eduBold}>Pre-University Course (PCMC)</Text>{"\n"}
            Viveka PU College, Kota (2018–2020) | 90.33%
          </Text>
          <Text style={styles.eduText}>
            📘 <Text style={styles.eduBold}>SSLC</Text>{"\n"}
            Govt High School, Thekkatte (2017–2018) | 80.32%
          </Text>
        </View>

        {/* ===== CONTACT ===== */}
        <View style={[styles.section, styles.contactSection]}>
          <Animatable.Text animation="fadeInUp" style={styles.sectionTitle}>
            Contact <Text style={styles.highlight}>Me</Text>
          </Animatable.Text>
          <Text style={styles.contactText}>
            📞 7795228752{"\n"}
            📧 bhoomikabhoomi9645@gmail.com{"\n"}
            📍 Thekkatte, Kundapura Taluk, Udupi District – 576231{"\n"}
            🌐 GitHub: github.com/githubbhoomi
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0a0a0a" },

  topMenu: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
    backgroundColor: "#111",
  },
  menuText: {
    color: "#00ffee",
    fontSize: 13,
    fontWeight: "600",
  },
homeSection: { flexDirection: "row" },
  section: {
    height: screenHeight,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  hello: { fontSize: 18, color: "#ccc" },
  name: { fontSize: 34, fontWeight: "700", color: "#00ffee" },
  role: { fontSize: 18, color: "#fff" },
  roleHighlight: { color: "#ff00ff" },
  desc: { color: "#aaa", textAlign: "center", marginTop: 10 },
  profilePic: {
    width: 170,
    height: 170,
    borderRadius: 100,
    marginTop: 25,
    borderWidth: 3,
    borderColor: "#00ffee",
  },
  sectionTitle: {
    fontSize: 26,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 15,
  },
  highlight: { color: "#00ffee" },
  aboutText: { color: "#bbb", textAlign: "center", lineHeight: 22, fontSize: 15 },

  // Skills

  skillCircleContainer: {
  alignItems: "center",
  justifyContent: "center",
  margin: 10, // reduced margin for more circles in a row
},

  skillTextContainer: {
    position: "absolute",
    alignItems: "center",
  },
  skillPercent: { color: "#00ffee", fontSize: 16, fontWeight: "700" },
  skillLabel: { color: "#fff", fontSize: 13, marginTop: 3 },

skillCategory: {
  color: "#00ffee",
  fontSize: 18,
  fontWeight: "700",
  marginTop: 25,
  marginBottom: 10,
  alignSelf: "flex-start",
},
skillsRow: {
  flexDirection: "row",
  justifyContent: "space-around",
  flexWrap: "wrap",
  width: "100%",
  marginBottom: 10,
},

  // Experience
  expCard: {
    backgroundColor: "#111",
    width: "85%",
    borderRadius: 10,
    padding: 20,
  },
  expRole: { color: "#00ffee", fontSize: 18, fontWeight: "700" },
  expCompany: { color: "#fff", fontSize: 15 },
  expPeriod: { color: "#bbb", marginBottom: 8 },
  expDesc: { color: "#ccc", fontSize: 14, lineHeight: 20 },

  // Projects
  projectCard: {
    width: "85%",
    backgroundColor: "#111",
    borderRadius: 10,
    padding: 20,
    marginVertical: 8,
  },
  projectText: { color: "#ccc", fontSize: 14, lineHeight: 20 },

  // Education
  eduText: { color: "#ccc", fontSize: 15, marginBottom: 12, textAlign: "center" },
  eduBold: { color: "#00ffee", fontWeight: "700" },

  // Contact
  contactText: { color: "#ccc", fontSize: 15, textAlign: "center", lineHeight: 24 },
});
