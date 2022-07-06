import { Container } from 'react-bootstrap';

const Footer = () => (
    <Container fluid style={{ backgroundColor: '#558b2f', color: '#202020' }}>
        <Container style={{
            display: 'flex', justifyContent: 'center', padding: '10px 0px 3px',
            fontSize: "80%", fontStyle: "italic", lineHeight: "1"
        }}>
            <img
                src="/logo.svg"
                width="50rem"
                height="50rem"
                className="d-inline-block align-top"
                alt="Ошибка импорта логотипа"
                style={{ marginRight: '15px' }}
            />
            <div>
                <p>2022 г. Усть-Илимск, Иркутская область.</p>
                <p>По вопросам индивидуального обучения обращайтесь по телефону 8-950-11-66-910
                    - Уварова Нина Викторовна. Обучение возможно как в очном так и удаленном формате</p>
                <p>Разработка сайта - Бондаренко И.В. igor21v@mail.ru</p>
            </div>
        </Container>
    </Container>
)

export default Footer;

