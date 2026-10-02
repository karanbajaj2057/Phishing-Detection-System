
type RiskScoreProps = {
  score: number;
};

export default function RiskScore({ score }: RiskScoreProps) {
  const level =
    score >= 70 ? "High Risk" :
    score >= 40 ? "Medium Risk" :
    "Low Risk";

  return React.createElement(
    "div",
    { className: "risk-score" },
    React.createElement("h2", null, "Risk Score"),
    React.createElement("p", null, `${score}/100`),
    React.createElement("strong", null, level)
  );
}