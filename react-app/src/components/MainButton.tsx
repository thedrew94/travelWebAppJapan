interface Props {
  type: "button" | "link";
  text: string;
  url?: string;
}

export default function MainButton({ type, text, url }: Props) {
  switch (type) {
    case "button":
      return <button>{text}</button>;
    case "link":
      return <a href={url}>{text}</a>;
    default:
      return null;
  }
}
