import * as S from "./styles";

export const Strength = ({ strength = "medium" }: StrengthProps) => {
  const itemStrength = {
    tooWeak: {
      title: "TOO WEAK!",
    },
    weak: {
      title: "WEAK",
    },
    medium: {
      title: "MEDIUM",
    },
    strong: {
      title: "STRONG",
    },
  };

  return (
    <S.Container>
      <S.Title>STRENGTH</S.Title>
      <S.WrapperLevel>
        <span>{itemStrength[strength]?.title}</span>
        <S.WrapperMarkerLevel strength={strength}>
          <S.Level />
          <S.Level />
          <S.Level />
          <S.Level />
        </S.WrapperMarkerLevel>
      </S.WrapperLevel>
    </S.Container>
  );
};
