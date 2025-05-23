import { useState } from 'react';
import { Group, Box, Collapse, ThemeIcon, Text, UnstyledButton, rem } from '@mantine/core';
import { IconCalendarStats, IconChevronRight } from '@tabler/icons-react';
import Allpatients from './Pages/Allpatients';
import Prescription from './Pages/Prescription';
import ReactDOM from 'react-dom/client';
import SubstituteDrug from './Pages/SubstituteDrug';
import Allergy from './Pages/Allergy';
import classes from '../../../components/Dashbords/DocDash/NavbarLinksGroup.module.css';

interface LinksGroupProps {
  icon: React.FC<any>;
  label: string;
  initiallyOpened?: boolean;
  links?: { label: string; link: string }[];

}

export function LinksGroup({ icon: Icon, label, initiallyOpened, links }: LinksGroupProps) {
  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(initiallyOpened || false);
  const items = (hasLinks ? links : []).map((link) => (
    <Text<'a'>
      component="a"
      className={classes.link}
      href={link.link}
      key={link.label}
      onClick={(event) => {
        event.preventDefault();
        const Div = document.querySelector("#ManupulateDiv");
        if (link.label === "AllPatients") {
          ReactDOM.createRoot(Div).render(<Allpatients />);
        } else if (link.label === "AllPrescriptions") {
          ReactDOM.createRoot(Div).render(<Prescription />);
        } else if (link.label === "PersonalProfile") {
          window.location.href = "http://localhost:5173/profile"
        } else if (link.label === "SuggestDrug") {
          ReactDOM.createRoot(Div).render(<SubstituteDrug />);
        }else if(link.label==="Allergy"){
          ReactDOM.createRoot(Div).render(<Allergy />);
        }else if(link.label==="ScduleMeet"){
          window.location.href=link.link
        }

      }}
    >
      {link.label}
    </Text >
  ));

  return (
    <>
      <UnstyledButton onClick={() => setOpened((o) => !o)} className={classes.control}>
        <Group justify="space-between" gap={0}>
          <Box style={{ display: 'flex', alignItems: 'center' }}>
            <ThemeIcon variant="light" size={30}>
              <Icon style={{ width: rem(18), height: rem(18) }} />
            </ThemeIcon>
            <Box ml="md">{label}</Box>
          </Box>
          {hasLinks && (
            <IconChevronRight
              className={classes.chevron}
              stroke={1.5}
              style={{
                width: rem(16),
                height: rem(16),
                transform: opened ? 'rotate(-90deg)' : 'none',
              }}
            />
          )}
        </Group>
      </UnstyledButton>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
}

const mockdata = {
  label: 'Releases',
  icon: IconCalendarStats,
  links: [
    { label: 'Upcoming releases', link: '/' },
    { label: 'Previous releases', link: '/' },
    { label: 'Releases schedule', link: '/' },
  ],
};

export function NavbarLinksGroup() {
  return (
    <Box mih={220} p="md">
      <LinksGroup {...mockdata} />
    </Box>
  );
}