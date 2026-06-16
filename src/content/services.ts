export type Service = {
  id: string
  title: string
  subtitle: string
  whatIDo: string[]
  whatChanges: string[]
}

export const services: Service[] = [
  {
    id: 'gestion-administrative',
    title: 'Gestion administrative premium',
    subtitle: 'Votre administratif, enfin sous contrôle.',
    whatIDo: [
      'Organisation et classement de vos documents',
      'Suivi des échéances administratives',
      'Gestion des courriers et correspondances',
      'Mise en place de procédures simples et durables',
    ],
    whatChanges: [
      'Plus jamais de document introuvable',
      'Zéro échéance oubliée',
      'Un bureau (physique et numérique) qui respire',
      'Du temps libéré pour votre cœur de métier',
    ],
  },
  {
    id: 'pre-comptabilite',
    title: 'Assistance comptable & pré-comptabilité',
    subtitle: 'Vos finances, lisibles et à jour.',
    whatIDo: [
      'Collecte et tri des pièces comptables',
      'Rapprochement bancaire mensuel',
      'Préparation des éléments pour votre expert-comptable',
      'Suivi des notes de frais',
    ],
    whatChanges: [
      'Une remise comptable sans stress',
      'Des honoraires comptables optimisés',
      'Une vision claire de vos dépenses',
      'Moins de VA-et-vient avec votre comptable',
    ],
  },
  {
    id: 'controle-gestion',
    title: 'Contrôle de gestion externalisé',
    subtitle: 'Pilotez votre activité avec des chiffres qui parlent.',
    whatIDo: [
      'Création et suivi de tableaux de bord personnalisés',
      'Analyse des marges et de la rentabilité',
      'Suivi budgétaire et prévisionnel',
      'Reporting mensuel synthétique',
    ],
    whatChanges: [
      'Des décisions basées sur des données fiables',
      "Une rentabilité visible au premier coup d'œil",
      'Une stratégie financière plus sereine',
      'Vous savez où vous allez',
    ],
  },
  {
    id: 'organisation-optimisation',
    title: 'Organisation & optimisation',
    subtitle: 'Des processus qui travaillent pour vous.',
    whatIDo: [
      'Audit de votre organisation actuelle',
      "Mise en place d'outils adaptés à votre taille",
      'Création de procédures et de modèles réutilisables',
      'Accompagnement au changement',
    ],
    whatChanges: [
      'Des tâches répétitives automatisées',
      'Une organisation que vous pouvez déléguer',
      "Moins d'énergie gaspillée sur l'accessoire",
      'Une structure solide pour grandir',
    ],
  },
  {
    id: 'accompagnement-strategique',
    title: 'Accompagnement stratégique premium',
    subtitle: 'Une partenaire de confiance pour vos décisions.',
    whatIDo: [
      'Revue régulière de votre activité (mensuelle ou trimestrielle)',
      'Aide à la prise de décision chiffrée',
      'Anticipation des risques administratifs et financiers',
      'Soutien lors des moments clés (recrutement, changement de statut…)',
    ],
    whatChanges: [
      "Vous n'êtes plus seul face aux grandes décisions",
      'Une vision 360° de votre activité',
      'Des risques anticipés plutôt que subis',
      'Un partenaire qui connaît votre dossier',
    ],
  },
]
