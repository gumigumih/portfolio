import React from "react";

const skills = {
  "エンジニアリング": [
    { name: "HTML/CSS/JS", level: 4 },
    { name: "- Vue.js", level: 4 },
    { name: "- A-Frame", level: 3 },
    { name: "PHP", level: 4 },
    { name: "- Wordpress", level: 4 },
    { name: "- Laravel", level: 3 },
    { name: "Python", level: 4 },
    { name: "Ruby on Rails", level: 3 },
    { name: "Perl", level: 2 },
    { name: "GAS", level: 3 },
    { name: "シェルスクリプト\nコマンドプロンプト", level: 3 },
    { name: "DB設計", level: 4 },
  ],
  "デザイン": [
    { name: "Photoshop", level: 5 },
    { name: "Illustrator", level: 4 },
    { name: "Adobe XD", level: 4 },
    { name: "Premiere Pro", level: 3 },
    { name: "VRoid Studio", level: 3 },
    { name: "Blender", level: 4 },
    { name: "Unity", level: 3 },
  ],
  "その他": [
    { name: "Git", level: 3 },
    { name: "OBS Studio", level: 3 },
    { name: "Google Analytics", level: 2 },
    { name: "Google Tag Manager", level: 2 },
    { name: "Google Looker Studio", level: 2 },
    { name: "Meta Business Suite", level: 2 },
  ],
};


export default function SkillMap() {
  return (
    <div className="grid grid-cols-3 gap-8 w-[80%]">
      {Object.entries(skills).map(([category, skillList], index) => (
        <div key={index}>
          <h2 className="text-[min(2.5vw,2.5rem)] font-bold text-center">
            <span
              className={`bg-[linear-gradient(transparent_70%,${
                category === "エンジニアリング"
                  ? "#55FFDC"
                  : category === "デザイン"
                  ? "#FEEE16"
                  : "#E3E8EB"
              }_30%)]`}
            >
              {category}
            </span>
          </h2>
          <ul className="mt-[min(2vw,2rem)] space-y-3">
            {skillList.map((skill, idx) => (
              <li key={idx} className="flex items-center justify-between">
                <span className="whitespace-pre-line text-[min(1.2vw,1.2rem)]">{skill.name}</span>
                <div className="flex space-x-1">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <div
                        key={i}
                        className={`w-5 h-5 ${
                          i < skill.level ?
                            (category === "エンジニアリング" ? "bg-[#55FFDC]" :
                              category === "デザイン" ? "bg-[#FEEE16]" : "bg-gray-500") + " rounded-sm"
                          : "bg-gray-200 scale-50 rounded-full"
                        }`}
                      ></div>
                    ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
