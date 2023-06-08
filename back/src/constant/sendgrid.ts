export const SUBJECT = 'JOYEUX ANNIVERSAIRE';

export const BODY = (user: any) => {
  return `
      <p>
        Joyeux anniversaire, ${user.first_name} !<br>
        Cher ${user.first_name},<br>
        Nous tenions à te souhaiter un joyeux anniversaire ! Que cette journée te soit remplie de bonheur, de surprises et de moments inoubliables.<br>
        Profite de cette occasion spéciale pour célébrer avec tes proches et créer des souvenirs précieux.<br>
        Encore une fois, bon anniversaire et tous nos vœux de bonheur !<br>
        Cordialement,<br>
        L'équipe de MDS<br>
      </p>
  `;
};
