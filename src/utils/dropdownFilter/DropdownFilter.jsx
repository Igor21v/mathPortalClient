import React, { useState } from 'react';
import { Form, Dropdown } from 'react-bootstrap';

const DropdownFilter = () => {

    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <a
            href=""
            ref={ref}
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }}
        >
            {children}
            &#x25bc;
        </a>
    ));

    const CustomMenu = React.forwardRef(
        ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
            const [value, setValue] = useState('');

            return (
                <div
                    ref={ref}
                    style={style}
                    className={className}
                    aria-labelledby={labeledBy}
                >
                    <Form.Control
                        autoFocus
                        className="mx-3 my-2 w-auto"
                        placeholder="Фильтр.."
                        onChange={(e) => setValue(e.target.value)}
                        value={value}
                    />
                    <ul className="list-unstyled">
                        {React.Children.toArray(children).filter(
                            (child) =>
                                !value || child.props.children.toLowerCase().startsWith(value.toLowerCase()),
                        )}
                    </ul>
                </div>
            );
        },
    );
    return (
        <Dropdown onSelect={(eventKey) => console.log('Press: ' + eventKey)}>
            <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                Отображать
            </Dropdown.Toggle>

            <Dropdown.Menu as={CustomMenu}>
                <Dropdown.Item eventKey="1" active>Общие файлы</Dropdown.Item>
                {/* <Dropdown.Divider /> */}
                <Dropdown.Item eventKey="2">Тема1</Dropdown.Item>
                <Dropdown.Item eventKey="3" >Не тема</Dropdown.Item>
                <Dropdown.Item eventKey="4">что то ещё</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>

    );
};

export default DropdownFilter;