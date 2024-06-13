import styles from "../styles/QuestionCard.module.css";

function QuestionCard({ question, category, index, totalCards }) {
  return (
    <div className={styles.questionCard}>
      <p className={styles.cardQuestion}>{question}</p>

      <p className={styles.cardCategory}>{category}</p>
      <p className={styles.cardNumber}>
        {index}/{totalCards}
      </p>
    </div>
  );
}

export default QuestionCard;
