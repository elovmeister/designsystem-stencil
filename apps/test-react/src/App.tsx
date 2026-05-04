import { useState } from "react";

import { LmPrototypeStencilButton, LmPrototypeStencilIcon, LmPrototypeStencilDropdown, LmPrototypeStencilDropdownItem} from "@lm-prototype-stencil/components-react";

import "@lm-prototype-stencil/tokens/dist/themes/light.css";
import "@lm-prototype-stencil/tokens/dist/themes/dark.css";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <section style={{ marginBottom: 32 }}>
        <h2 style={{
            fontSize: 14,
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            marginBottom: 12,
            color: "var(--lm-prototype-stencil-color-text-secondary)",
        }}
        >
            {title}
        </h2>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            {children}
        </div>
    </section>
);

export default function App() {
    const [darkMode, setDarkMode] = useState(false);
    const [loading, setLoading] = useState(false);

    const toggleTheme = () => {
        const next = !darkMode;
        setDarkMode(next);
        document.documentElement.dataset["theme"] = next ? "dark" : "";
    };

    const simulateAsync = () => {
        setLoading(true);
        setTimeout(() => setLoading(false), 2000);
    };

    return (
        <div style={{
            padding: 40,
            minHeight: "100vh",
            background: "var(--lm-prototype-stencil-color-surface-default)",
            color: "var(--lm-prototype-stencil-color-text-primary)",
            fontFamily: "system-ui, sans-serif",
        }}
        >
            <header style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 40,
                borderBottom: "1px solid var(--lm-prototype-stencil-color-border-default)",
                paddingBottom: 20,
            }}
            >
                <h1 style={{ fontSize: 24, fontWeight: 700, margin: 0 }}>
                    Design System with Stencil — React Test App
                </h1>
                <LmPrototypeStencilButton variant="tertiary" onClick={toggleTheme}>
                    {darkMode ? "☀️ Light" : "🌙 Dark"}
                </LmPrototypeStencilButton>
            </header>

            <Section title="Variants">
                <LmPrototypeStencilButton variant="primary">Primary</LmPrototypeStencilButton>
                <LmPrototypeStencilButton variant="secondary">Secondary</LmPrototypeStencilButton>
                <LmPrototypeStencilButton variant="tertiary">Tertiary</LmPrototypeStencilButton>
                <LmPrototypeStencilButton variant="danger">Danger</LmPrototypeStencilButton>
            </Section>

            <Section title="Sizes">
                <LmPrototypeStencilButton size="sm">Small</LmPrototypeStencilButton>
                <LmPrototypeStencilButton size="md">Medium</LmPrototypeStencilButton>
                <LmPrototypeStencilButton size="lg">Large</LmPrototypeStencilButton>
            </Section>

            <Section title="With Icons">
                <LmPrototypeStencilButton variant="primary">
                    <LmPrototypeStencilIcon slot="start" name="arrow-right" />
                    Continue
                </LmPrototypeStencilButton>
                <LmPrototypeStencilButton variant="secondary">
                    Save
                    <LmPrototypeStencilIcon slot="end" name="check" />
                </LmPrototypeStencilButton>
                <LmPrototypeStencilButton variant="danger">
                    <LmPrototypeStencilIcon slot="start" name="x" />
                    Remove
                </LmPrototypeStencilButton>
            </Section>

            <Section title="States">
                <LmPrototypeStencilButton loading={loading} onClick={simulateAsync}>
                    {loading ? "Saving…" : "Click to load (2s)"}
                </LmPrototypeStencilButton>
                <LmPrototypeStencilButton disabled>Disabled</LmPrototypeStencilButton>
                <LmPrototypeStencilButton loading>Always loading</LmPrototypeStencilButton>
            </Section>

            <Section title="Form Participation">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        alert("Submitted!");
                    }}
                    style={{ display: "flex", gap: 8, alignItems: "center" }}
                >
                    <input
                        name="q"
                        placeholder="Type something…"
                        style={{
                            padding: "8px 12px",
                            border: "1px solid var(--lm-prototype-stencil-color-border-default)",
                            borderRadius: "var(--lm-prototype-stencil-radius-md)",
                            background: "var(--lm-prototype-stencil-color-surface-raised)",
                            color: "var(--lm-prototype-stencil-color-text-primary)",
                            fontSize: "14px",
                        }}
                    />
                    <LmPrototypeStencilButton type="submit">Submit</LmPrototypeStencilButton>
                </form>
            </Section>

            <Section title="Dropdown">
                <LmPrototypeStencilDropdown name="dropdown" label="Dropdown med items" placeholder="Välj ett itme">
                    <LmPrototypeStencilDropdownItem>
                        Item 1
                    </LmPrototypeStencilDropdownItem>
                    <LmPrototypeStencilDropdownItem>
                        Item 2
                    </LmPrototypeStencilDropdownItem>
                    <LmPrototypeStencilDropdownItem>
                        Item 3
                    </LmPrototypeStencilDropdownItem>
                </LmPrototypeStencilDropdown>
            </Section>
        </div>
    );
}