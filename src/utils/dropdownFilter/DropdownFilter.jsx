import React, { useState } from 'react';
import { Form, Dropdown } from 'react-bootstrap';

const DropdownFilter = (props) => {
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
                            (child, index) => 
                                (!value || index===props.general.length || child.props.children.toLowerCase().startsWith(value.toLowerCase()))
                        )}
                    </ul>
                </div>
            );
        },
    );
    return (
        <Dropdown onSelect={(eventKey) => console.log('Press: ' + eventKey)}>
            <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                Режим отображения
            </Dropdown.Toggle>

            <Dropdown.Menu as={CustomMenu}>
                {props.general.map(item => 
                    <Dropdown.Item key={item.eventKey} eventKey={item.eventKey}>{item.name}</Dropdown.Item>
                )}
                <Dropdown.Divider />
                {props.private.map(item => 
                    <Dropdown.Item key={item.eventKey} eventKey={item.eventKey}>{item.name}</Dropdown.Item>
                )}
            </Dropdown.Menu>
        </Dropdown>

    );
};

export default DropdownFilter;