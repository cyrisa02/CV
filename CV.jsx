import React from 'react';

export default function CVProfessional() {
  return (
    <div className="w-full max-w-[210mm] mx-auto bg-white p-8 text-gray-900 font-sans text-sm leading-tight">
      {/* Header */}
      <div className="border-b-4 border-blue-900 pb-4 mb-4">
        <h1 className="text-3xl font-bold text-blue-900 mb-1">CYRIL GOURDON</h1>
        <p className="text-lg text-gray-700 mb-2">Responsable Production & Consultant IA</p>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs">
          <span>📍 27, rue Paul Deviolaine, F-02200 Soissons</span>
          <span>📧 cyril.gourdon.02@gmail.com</span>
          <span>🔗 linkedin.com/in/cyril-gourdon/</span>
        </div>
      </div>

      {/* Profil */}
      <div className="mb-4">
        <h2 className="text-base font-bold text-blue-900 mb-2 border-b border-gray-300">PROFIL</h2>
        <p className="text-xs leading-relaxed">
          <strong>Ingénieur en Génie Mécanique</strong> avec 25+ ans d'expérience en industrie et <strong>Consultant en Intelligence Artificielle</strong>. 
          Expert en gestion de production, SAP/Dynamics, et développement d'outils IA sur mesure. Orienté service client avec un fort sens du relationnel 
          et des compétences internationales (Allemand/Anglais).
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {/* Colonne gauche */}
        <div className="col-span-2">
          {/* Expériences */}
          <div className="mb-4">
            <h2 className="text-base font-bold text-blue-900 mb-2 border-b border-gray-300">EXPÉRIENCES PROFESSIONNELLES</h2>
            
            <div className="mb-3">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-xs">Consultant en Intelligence Artificielle</h3>
                <span className="text-xs text-gray-600">Août 2025</span>
              </div>
              <p className="text-xs italic text-gray-700">AliciA-GPT, Soissons (02)</p>
              <ul className="text-xs mt-1 space-y-0.5 ml-4">
                <li>• Auditer les PME/TPE pour intégrer l'IA dans leurs processus</li>
                <li>• Former des équipes à l'adoption d'outils IA (Comet, NotebookLM, ChatGPT)</li>
                <li>• Développer des outils IA sur mesure et en local (Ollama, LM Studio, Gemini)</li>
                <li>• Créer des systèmes RAG et workflows avec N8N, Make</li>
              </ul>
            </div>

            <div className="mb-3">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-xs">Responsable Montage et SAV</h3>
                <span className="text-xs text-gray-600">Janv. 2025 - Août. 2025</span>
              </div>
              <p className="text-xs italic text-gray-700">AFHYMAT, Roye (80) - Kit Hydraulique</p>
              <ul className="text-xs mt-1 space-y-0.5 ml-4">
                <li>• Encadrer une équipe de mécaniciens et montée en compétence</li>
                <li>• Organiser et superviser les interventions SAV et retours clients</li>
                <li>• Chiffrer les coûts SAV et respecter délais et qualité</li>
              </ul>
            </div>

            <div className="mb-3">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-xs">Responsable de Production</h3>
                <span className="text-xs text-gray-600">Avr. 2023 - Jan. 2024</span>
              </div>
              <p className="text-xs italic text-gray-700">Barytine et Minéraux, Chaillac (36)</p>
              <ul className="text-xs mt-1 space-y-0.5 ml-4">
                <li>• Analyses fonctionnelles (AMDEC) pour garantir la fiabilité</li>
                <li>• Planification des opérations de production et maintenance</li>
                <li>• Analyse des KPI pour l'amélioration continue</li>
              </ul>
            </div>

            <div className="mb-3">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-xs">Commercial Web</h3>
                <span className="text-xs text-gray-600">Mars - Sept. 2024</span>
              </div>
              <p className="text-xs italic text-gray-700">Triangle HiFi, Soissons (02)</p>
              <ul className="text-xs mt-1 space-y-0.5 ml-4">
                <li>• Gestion service client e-commerce (Shopify, Freshdesk, SAGE 100)</li>
              </ul>
            </div>

            <div className="mb-3">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-xs">Responsable de Production</h3>
                <span className="text-xs text-gray-600">Jan. 2001 - Mars 2010</span>
              </div>
              <p className="text-xs italic text-gray-700">UZIN, Soissons (02) - Ragréage</p>
              <ul className="text-xs mt-1 space-y-0.5 ml-4">
                <li>• Coordination des équipes techniques et ordonnancement SAP</li>
              </ul>
            </div>

            <div className="mb-3">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-xs">Responsable Prototype</h3>
                <span className="text-xs text-gray-600">Juin 1997 - Déc. 2000</span>
              </div>
              <p className="text-xs italic text-gray-700">Liebherr, Colmar (68)</p>
              <ul className="text-xs mt-1 space-y-0.5 ml-4">
                <li>• Optimisation des processus avec ERP BAAN</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Colonne droite */}
        <div>
          {/* Compétences */}
          <div className="mb-4">
            <h2 className="text-sm font-bold text-blue-900 mb-2 border-b border-gray-300">COMPÉTENCES</h2>
            
            <h3 className="font-bold text-xs mt-2 mb-1">Intelligence Artificielle</h3>
            <p className="text-xs leading-relaxed">ChatGPT, Claude, Gemini, Mistral, Perplexity, NotebookLM, Ollama, LM Studio, N8N, Make, RAG, Cursor, CodeVibe, AI Studio</p>

            <h3 className="font-bold text-xs mt-2 mb-1">ERP & Logiciels</h3>
            <p className="text-xs leading-relaxed">SAP, Dynamics, BAAN, SolidWorks, MS Office, Shopify, Freshdesk, SAGE 100</p>

            <h3 className="font-bold text-xs mt-2 mb-1">Gestion Production</h3>
            <p className="text-xs leading-relaxed">AMDEC, KPI, Ordonnancement, Planification, SAV, Nomenclatures, Gammes</p>

            <h3 className="font-bold text-xs mt-2 mb-1">Soft Skills</h3>
            <p className="text-xs leading-relaxed">Empathie, sens relationnel et commercial, service client, écoute active, rigueur, flexibilité</p>
          </div>

          {/* Langues */}
          <div className="mb-4">
            <h2 className="text-sm font-bold text-blue-900 mb-2 border-b border-gray-300">LANGUES</h2>
            <p className="text-xs">🇫🇷 Français (Natif)</p>
            <p className="text-xs">🇩🇪 Allemand (Courant)</p>
            <p className="text-xs">🇬🇧 Anglais (Courant)</p>
          </div>

          {/* Formation */}
          <div className="mb-4">
            <h2 className="text-sm font-bold text-blue-900 mb-2 border-b border-gray-300">FORMATION</h2>
            <div className="mb-2">
              <p className="font-bold text-xs">Bachelor Web Developer</p>
              <p className="text-xs text-gray-700">DigitalCampus, 2021</p>
            </div>
            <div className="mb-2">
              <p className="font-bold text-xs">DESS Génie Mécanique</p>
              <p className="text-xs text-gray-700">Université de Metz, 1996</p>
            </div>
            <div>
              <p className="font-bold text-xs">Dipl. Ing. Maschinenbau</p>
              <p className="text-xs text-gray-700">FH Sarrebrück (DE), 1995</p>
            </div>
          </div>

          {/* Autres */}
          <div>
            <h2 className="text-sm font-bold text-blue-900 mb-2 border-b border-gray-300">AUTRES</h2>
            <p className="text-xs mb-1"><strong>2010-2020:</strong> Entrepreneur (Tapissier Ameublement)</p>
            <p className="text-xs"><strong>2020-2021:</strong> Professeur de Mathématiques</p>
          </div>
        </div>
      </div>
    </div>
  );
}