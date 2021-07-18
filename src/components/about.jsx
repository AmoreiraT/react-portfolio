import React from "react";
import myImage from "../img/myImage.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "HTML5_skill", content: "HTML5", porcentage: "80%", value: "80" },
        { id: "CSS3_skill", content: "CSS3", porcentage: "75%", value: "75" },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          porcentage: "70%",
          value: "70"
        },
        { id: "PHP_skill", content: "Angular", porcentage: "70%", value: "70" },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          porcentage: "70%",
          value: "70"
        },
        {
          id: "Python_skill",
          content: "Flutter",
          porcentage: "75%",
          value: "75"
        },
        {
          id: "VanillaJS_skill",
          content: "Adobe PhotoShop",
          porcentage: "95%",
          value: "95"
        },
         {
          id: "VanillaJS_skill",
          content: "Adobe InDesign",
          porcentage: "85%",
          value: "85"
        },
          {
          id: "VanillaJS_skill",
          content: "Adobe Illustrator",
          porcentage: "95%",
          value: "95"
        },
           {
          id: "VanillaJS_skill",
          content: "Adobe Premiere",
          porcentage: "75%",
          value: "75"
        },
            {
          id: "VanillaJS_skill",
          content: "Adobe After Effects",
          porcentage: "80%",
          value: "80"
        },
             {
          id: "VanillaJS_skill",
          content: "Adobe XD",
          porcentage: "85%",
          value: "85"
        },
              {
          id: "VanillaJS_skill",
          content: "Sketch",
          porcentage: "75%",
          value: "75"
        },
               {
          id: "VanillaJS_skill",
          content: "Figma",
          porcentage: "80%",
          value: "80"
        },
                {
          id: "VanillaJS_skill",
          content: "Blender",
          porcentage: "65%",
          value: "65"
        },
                 {
          id: "VanillaJS_skill",
          content: "CINEMA 4D",
          porcentage: "55%",
          value: "55"
        },
                  {
          id: "VanillaJS_skill",
          content: "Unity 3D",
          porcentage: "75%",
          value: "75"
        },
       
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
"Conquistar meu primeiro computador aos 13 anos, me fez ter que trabalhar para ajudar nos custos da máquina e da internet. Diversos trabalhos, desde farmácia até fazer calçados, me deu a habilidade de adaptação e facilidade de aprendizado em qualquer que fosse a área. Criar artes visuais sempre me motivou, pelo desenho conheci a extensão da minha criatividade. Fui levado pela pintura digital até a modelagem 3D. Conheço o Blender há bastante tempo, também naveguei pelos concorrentes 3DMax, Cinema4D, Maya… Neste momento, com 17 anos, trabalhava para a Secretaria de Cultura da Prefeitura de Pitangui/MG, minha cidade natal. Meu interesse pela arte e cultura se fizeram mais sólidos, então fui estudar Artes Visuais, na Escola de Belas Artes da UFMG."        },
        {
          id: "second-p-about",
          content:
            "Mudar do interior para uma capital é um ato de coragem. O resultado deste vestibular só sairia na metade daquele ano, mas no início havia passado para um curso técnico de Jogos Digitais, e fiz um semestre até ingressar na faculdade, mas foi o suficiente para abrir meus olhos para a Programação e o Desenvolvimento de Softwares. Estudei a fundo as artes visuais, trabalhei junto ao espaço f, na Escola de Belas Artes. Foi onde realizei algumas exposições, mas também em outros locais como a Maison De L'Amérique Latine, Paris/França. Entretanto a programação ainda me encantava. Fiz em paralelo matérias do curso de Arte e Tecnologia da mesma faculdade. Desenvolvi obras de arte digital, realidade aumentada, arte eletrônica. Aprendi a fundo linguagens como C#, HTML, CSS e JS, além de softwares como Unity3D para interação digital e Arduino para eletrônicos."
        },
        {
          id: "third-p-about",
          content:
            "Amar não é apenas uma relação de prazer, mas também de construção. O que me faz acreditar que amo tudo que faço e trabalho, pois há em mim a necessidade de ser melhor nas áreas que me atravessam. Me tornei Bacharel em 2018 e desde então tenho me dedicado especialmente à programação. Venho trabalhando com ferramentas para Desenvolvimento Web e de Software como Angular, Flutter e ReactNative. Em paralelo também dominando as ferramentas de User Interface, Sketch, AdobeXD e Figma. Encerro falando de amor pois é como percebo o entusiasmo que sinto quando me disponho a aprender ou aprofundar os conhecimentos em tecnologia."
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">Minha História</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="minhaHistoria" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
