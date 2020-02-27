# Game-Quiz

QUIZ -< >- USER
   |
   ^
Question -< Expl
   |
   ^
Answer


Attributes:
Quiz: topic,
User_Quiz: user_id, quiz_id,
User: name, email, pass,
Question: content, snippet, quiz_id
Answer: content, isAnswer (bool), question_id
Expl: content, question_id, read_more
